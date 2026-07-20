const App = (() => {
  const STORAGE_KEY = 'fitness_checkin';
  let state = loadState();
  let viewDate = new Date();
  let statsRange = 7;
  let lineChart = null, pieChart = null;
  let prevPct = 0; // track previous completion % for confetti

  const CAL_PER_SET = {
    bicep_curl:8, hammer_curl:8, tricep_dip:10, overhead_extension:7,
    push_up:12, dumbbell_press:10, dumbbell_fly:8,
    shoulder_press:9, lateral_raise:7,
    squat:10, lunge:12, wall_sit:6, calf_raise:5,
    plank:8, russian_twist:6, jog:25, high_knees:18
  };

  function getDefaultState() {
    return { intensity:'standard', focus:'arm', waterTarget:8, proteinTarget:120, history:{} };
  }
  function loadState() {
    try { const s=localStorage.getItem(STORAGE_KEY); return s ? {...getDefaultState(),...JSON.parse(s)} : getDefaultState(); }
    catch { return getDefaultState(); }
  }
  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  function dateKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }
  function getDateData(d) {
    const key=dateKey(d);
    if(!state.history[key]) state.history[key]={exercises:{},nutrition:{water:0,protein:0},completed:false};
    return state.history[key];
  }
  function isToday(d) { return dateKey(d)===dateKey(new Date()); }

  // ===== Timer =====
  const timers = {};
  function clearTimer(id) { if(timers[id]){clearInterval(timers[id]);delete timers[id];} }

  function startRestTimer(exId, seconds, cardEl) {
    clearTimer(exId);
    const bar=cardEl.querySelector('.ci-rest-bar');
    bar.classList.add('active');
    let rem=seconds,total=seconds;
    const update=()=>{const f=bar.querySelector('.rb-fill'),t=bar.querySelector('.rb-time');if(f)f.style.width=`${(rem/total)*100}%`;if(t)t.textContent=`${rem}s`;};
    update();
    const tick=()=>{rem--;update();if(rem<=0){clearTimer(exId);bar.classList.remove('active');markSetDone(exId);}};
    timers[exId]=setInterval(tick,1000);
    bar.querySelector('.rb-skip').onclick=()=>{clearTimer(exId);bar.classList.remove('active');markSetDone(exId);};
    bar.querySelector('.rb-pause').onclick=()=>{
      if(timers[exId+'_p']){timers[exId+'_p']=false;bar.querySelector('.rb-pause').textContent='⏸';timers[exId]=setInterval(tick,1000);}
      else{timers[exId+'_p']=true;clearInterval(timers[exId]);bar.querySelector('.rb-pause').textContent='▶';}
    };
  }

  function startCountdown(exId, seconds, cardEl) {
    clearTimer(exId+'_cd');
    const cd=cardEl.querySelector('.ci-countdown');
    cd.classList.add('active');
    let rem=seconds,total=seconds,paused=false;
    const update=()=>{const f=cd.querySelector('.cc-fill'),t=cd.querySelector('.cc-time');const m=Math.floor(rem/60),s=rem%60;if(f)f.style.width=`${(rem/total)*100}%`;if(t)t.textContent=m>0?`${m}:${String(s).padStart(2,'0')}`:`${s}s`;};
    update();
    const tick=()=>{rem--;update();if(rem<=0)finishCountdown(exId);};
    timers[exId+'_cd']=setInterval(tick,1000);
    cd.querySelector('.cc-pause').onclick=()=>{
      if(paused){paused=false;cd.querySelector('.cc-pause').textContent='⏸';timers[exId+'_cd']=setInterval(tick,1000);}
      else{paused=true;cd.querySelector('.cc-pause').textContent='▶';clearInterval(timers[exId+'_cd']);}
    };
    cd.querySelector('.cc-skip').onclick=()=>{clearTimer(exId+'_cd');cd.classList.remove('active');markSetDone(exId);};
  }

  function finishCountdown(exId) {
    clearTimer(exId+'_cd');
    const card=document.querySelector(`.check-item[data-ex-id="${exId}"]`);
    if(card)card.querySelector('.ci-countdown').classList.remove('active');
    markSetDone(exId);
  }

  function markSetDone(exId) {
    const data=getDateData(viewDate);
    if(!data.exercises[exId])return;
    const ex=EXERCISES[exId],sets=ex.sets[state.intensity];
    if(data.exercises[exId].doneSets<sets){
      data.exercises[exId].doneSets++;
      if(data.exercises[exId].doneSets>=sets)data.exercises[exId].completed=true;
      saveState();
      syncDataFile();
      checkConfetti();
      if(!data.exercises[exId].completed&&ex.rest[state.intensity]>0){
        renderChecklist();renderSummary();
        const card=document.querySelector(`.check-item[data-ex-id="${exId}"]`);
        if(card)startRestTimer(exId,ex.rest[state.intensity],card);
      }else{renderChecklist();renderSummary();}
    }
  }

  // ===== Confetti =====
  function checkConfetti() {
    const data=getDateData(viewDate);
    const plan=getWeeklyPlan(state.focus)[viewDate.getDay()];
    const done=plan.exercises.filter(id=>data.exercises[id]&&data.exercises[id].completed).length;
    const pct=plan.exercises.length>0?Math.round((done/plan.exercises.length)*100):0;
    if(pct>=100&&prevPct<100)launchConfetti();
    prevPct=pct;
  }

  function launchConfetti() {
    const container=document.getElementById('confettiContainer');
    const colors=['#34c759','#ff9500','#007aff','#ff3b30','#af52de','#5ac8fa','#ffcc00'];
    for(let i=0;i<60;i++){
      const piece=document.createElement('div');
      piece.className='confetti-piece';
      piece.style.left=Math.random()*100+'%';
      piece.style.background=colors[Math.floor(Math.random()*colors.length)];
      piece.style.width=(Math.random()*8+6)+'px';
      piece.style.height=(Math.random()*8+6)+'px';
      piece.style.borderRadius=Math.random()>0.5?'50%':'2px';
      piece.style.animationDuration=(Math.random()*2+2)+'s';
      piece.style.animationDelay=(Math.random()*0.5)+'s';
      container.appendChild(piece);
    }
    setTimeout(()=>{container.innerHTML='';},5000);
  }

  // ===== Data Export =====
  function syncDataFile() {
    const keys=Object.keys(state.history).sort();
    let md='# 锻炼打卡数据\n\n';
    md+=`导出时间: ${new Date().toLocaleString('zh-CN')}\n\n`;
    md+='| 日期 | 计划 | 完成 | 消耗kcal | 饮水 | 蛋白质 |\n';
    md+='|------|------|------|----------|------|--------|\n';
    keys.forEach(key=>{
      const d=state.history[key];
      const dd=new Date(key);
      const plan=getWeeklyPlan(state.focus)[dd.getDay()];
      const doneCount=plan.exercises.filter(id=>d.exercises[id]&&d.exercises[id].completed).length;
      let cal=0;
      plan.exercises.forEach(id=>{
        const ex=EXERCISES[id],sets=ex.sets[state.intensity];
        const ds=d.exercises[id]?(d.exercises[id].completed?sets:d.exercises[id].doneSets):0;
        cal+=(CAL_PER_SET[id]||8)*ds;
      });
      const status=d.completed?'✓ 完成':doneCount>0?`${doneCount}/${plan.exercises.length}`:'未完成';
      md+=`| ${key} | ${plan.name} | ${status} | ${cal} | ${d.nutrition.water}杯 | ${d.nutrition.protein}g |\n`;
    });
    // Save to localStorage as well
    state._exportMd=md;
    saveState();
  }

  function downloadMd() {
    syncDataFile();
    const md=state._exportMd||'';
    const blob=new Blob([md],{type:'text/markdown'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=`锻炼数据_${dateKey(new Date())}.md`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ===== Init =====
  function init() {
    document.getElementById('datePrev').addEventListener('click',()=>{viewDate.setDate(viewDate.getDate()-1);prevPct=0;render();});
    document.getElementById('dateNext').addEventListener('click',()=>{viewDate.setDate(viewDate.getDate()+1);prevPct=0;render();});
    document.getElementById('btnSettings').addEventListener('click',openSettings);
    document.getElementById('btnStats').addEventListener('click',showStats);
    document.getElementById('btnBack').addEventListener('click',hideStats);
    document.getElementById('btnExport').addEventListener('click',downloadMd);
    document.querySelectorAll('.range-btn').forEach(b=>{
      b.addEventListener('click',()=>{
        statsRange=parseInt(b.dataset.range);
        document.querySelectorAll('.range-btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        renderStats();
      });
    });
    // Auto-detect date change: check every 30s, if date changed reset to today
    let lastDateKey = dateKey(viewDate);
    setInterval(()=>{
      const today = new Date();
      const todayKey = dateKey(today);
      if (todayKey !== lastDateKey) {
        lastDateKey = todayKey;
        viewDate = today;
        prevPct = 0;
        render();
      }
    }, 30000);
    // Check if today was already completed (for confetti state)
    const data=getDateData(viewDate);
    const plan=getWeeklyPlan(state.focus)[viewDate.getDay()];
    const done=plan.exercises.filter(id=>data.exercises[id]&&data.exercises[id].completed).length;
    prevPct=plan.exercises.length>0?Math.round((done/plan.exercises.length)*100):0;
    render();
  }

  function render(){renderDate();renderChecklist();renderSummary();}

  function renderDate(){
    const months=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    const weekdays=['周日','周一','周二','周三','周四','周五','周六'];
    document.getElementById('dateDisplay').textContent=`${viewDate.getFullYear()}年${months[viewDate.getMonth()]}${viewDate.getDate()}日`;
    document.getElementById('dayLabel').textContent=isToday(viewDate)?'今天':weekdays[viewDate.getDay()];
    const plan=getWeeklyPlan(state.focus)[viewDate.getDay()];
    document.getElementById('workoutTitle').textContent=plan.name;
    document.getElementById('durationBadge').textContent=`~${plan.estimatedTime}分钟`;
    document.getElementById('intensityBadge').textContent=state.intensity==='easy'?'轻松':state.intensity==='hard'?'强化':'标准';
  }

  function renderSummary(){
    const data=getDateData(viewDate);
    const plan=getWeeklyPlan(state.focus)[viewDate.getDay()];
    const done=plan.exercises.filter(id=>data.exercises[id]&&data.exercises[id].completed).length;
    const total=plan.exercises.length;
    const pct=total>0?Math.round((done/total)*100):0;
    document.getElementById('summaryPct').textContent=`${pct}%`;
    document.getElementById('progressCircle').style.strokeDashoffset=100-pct;
    document.getElementById('summaryDone').textContent=done;
    document.getElementById('summaryTotal').textContent=total;
    let cal=0;
    plan.exercises.forEach(id=>{
      const ex=EXERCISES[id],sets=ex.sets[state.intensity];
      const ds=(data.exercises[id]&&data.exercises[id].completed)?sets:(data.exercises[id]?data.exercises[id].doneSets:0);
      cal+=(CAL_PER_SET[id]||8)*ds;
    });
    document.getElementById('summaryCal').textContent=cal;
  }

  function renderChecklist(){
    const dayIdx=viewDate.getDay(),plan=getWeeklyPlan(state.focus)[dayIdx],data=getDateData(viewDate);
    const list=document.getElementById('checklist');
    list.innerHTML='';

    // Sort: incomplete first, completed/skipped at bottom
    const sortedExercises = [...plan.exercises].sort((a,b) => {
      const aData = data.exercises[a] || {completed:false,skipped:false};
      const bData = data.exercises[b] || {completed:false,skipped:false};
      const aDone = (aData.completed || aData.skipped) ? 1 : 0;
      const bDone = (bData.completed || bData.skipped) ? 1 : 0;
      return aDone - bDone;
    });

    sortedExercises.forEach(exId=>{
      const ex=EXERCISES[exId];
      const exData=data.exercises[exId]||{doneSets:0,completed:false,skipped:false};
      const sets=ex.sets[state.intensity],reps=ex.reps[state.intensity];
      const animSvg=ex.animSvg||ex.svg;
      const item=document.createElement('div');
      item.className=`check-item ${exData.completed?'done':''}`;
      item.dataset.exId=exId;

      let setsInfo=ex.isTimed?`${formatTime(reps)} × ${sets}组`:`${reps}次 × ${sets}组`;
      let dots=Array.from({length:sets},(_,i)=>{
        const isDone=i<exData.doneSets,isCurrent=i===exData.doneSets&&!exData.completed;
        return `<div class="set-dot ${isDone?'done':''} ${isCurrent?'current':''}" data-set="${i}" data-ex="${exId}">${isDone?'✓':i+1}</div>`;
      }).join('');

      let timerBtns='';
      if(!exData.completed&&exData.doneSets<sets&&ex.isTimed){
        timerBtns=`<div class="ci-timer-row">
          <button class="ci-start-btn" data-ex="${exId}">▶ 开始</button>
          <button class="ci-pause-btn" data-ex="${exId}" style="display:none">⏸ 暂停</button>
          <button class="ci-restart-btn" data-ex="${exId}" style="display:none">↺ 重来</button>
        </div>`;
      }

      item.innerHTML=`
        <button class="ci-check" data-ex="${exId}">${exData.completed?'✓':''}</button>
        <div class="ci-body">
          <div class="ci-row"><span class="ci-name">${ex.name}</span><span class="ci-tag ${ex.tagClass}">${ex.tag}</span></div>
          <div class="ci-thumb">${animSvg}</div>
          <div class="ci-desc">${ex.description}</div>
          <div class="ci-sets">${setsInfo}</div>
          <div class="set-tracker">${dots}</div>
          ${timerBtns}
          <div class="ci-countdown" data-ex="${exId}">
            <div class="cc-bar"><div class="cc-fill" style="width:100%"></div></div>
            <span class="cc-time">0s</span>
            <div class="cc-btns"><button class="cc-btn cc-pause">⏸</button><button class="cc-btn cc-skip">跳过</button></div>
          </div>
          <div class="ci-rest-bar" data-ex="${exId}">
            <div class="rb-bar"><div class="rb-fill" style="width:100%"></div></div>
            <span class="rb-time">0s</span>
            <div class="rb-btns"><button class="rb-btn rb-pause">⏸</button><button class="rb-btn rb-skip">跳过</button></div>
          </div>
          <div class="ci-actions">
            <button class="ci-detail-btn" data-ex="${exId}">详情 ▾</button>
            <button class="ci-skip" data-ex="${exId}">${exData.skipped?'已跳过':'跳过'}</button>
          </div>
          <div class="ci-detail-wrap" id="detail-${exId}">
            <div class="detail-plan">
              <div class="detail-plan-row"><span>组数</span><span>${sets} 组</span></div>
              <div class="detail-plan-row"><span>${ex.unit==='秒'?'时长':'次数'}</span><span>${ex.unit==='秒'?formatTime(reps):reps+' 次'}</span></div>
              <div class="detail-plan-row"><span>组间休息</span><span>${ex.rest[state.intensity]} 秒</span></div>
            </div>
            <h3 style="font-size:0.75rem;color:var(--text-tertiary);margin:10px 0 6px;text-transform:uppercase;letter-spacing:0.04em">动作步骤</h3>
            <ol class="detail-steps">${ex.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
            <h3 style="font-size:0.75rem;color:var(--text-tertiary);margin:10px 0 6px;text-transform:uppercase;letter-spacing:0.04em">注意事项</h3>
            <ul class="detail-tips">${ex.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
          </div>
        </div>`;
      list.appendChild(item);
    });

    // Separator
    if(plan.exercises.length>0){
      const sep=document.createElement('div');sep.className='check-item';sep.style.padding='4px 16px';
      sep.innerHTML='<div style="flex:1;height:0.5px;background:var(--separator)"></div>';
      list.appendChild(sep);
    }

    // Nutrition
    // Water
    const waterCount=data.nutrition.water,waterPct=Math.min(100,(waterCount/state.waterTarget)*100),waterDone=waterCount>=state.waterTarget;
    const waterItem=document.createElement('div');waterItem.className=`check-item ${waterDone?'done':''}`;
    waterItem.innerHTML=`<button class="ci-check" data-nutri="water">${waterDone?'✓':''}</button>
      <div class="ci-body"><div class="ci-row"><span class="ci-name">💧 饮水</span><span class="ci-tag tag-nutrition">补充</span></div>
      <div class="nutri-bar-wrap"><div class="nutri-bar-fill water" style="width:${waterPct}%"></div></div>
      <div class="nutri-counter"><button class="nutri-btn" data-nutri="water" data-dir="-1">−</button><span>${waterCount}</span> / <span>${state.waterTarget}</span> 杯<button class="nutri-btn" data-nutri="water" data-dir="1">+</button></div></div>`;
    list.appendChild(waterItem);

    // Protein with food items
    const proteinCount=data.nutrition.protein,proteinPct=Math.min(100,(proteinCount/state.proteinTarget)*100),proteinDone=proteinCount>=state.proteinTarget;
    const proteinFoods=[
      {name:'🥚 鸡蛋 1个', grams:10},
      {name:'🥛 牛奶 250ml', grams:10},
      {name:'🍗 鸡胸肉 100g', grams:25},
      {name:'🥤 蛋白粉 1勺', grams:10},
      {name:'🐟 鱼肉 100g', grams:20},
      {name:'🥩 牛肉 100g', grams:26}
    ];
    const proteinItem=document.createElement('div');proteinItem.className=`check-item ${proteinDone?'done':''}`;
    proteinItem.innerHTML=`<button class="ci-check" data-nutri="protein">${proteinDone?'✓':''}</button>
      <div class="ci-body"><div class="ci-row"><span class="ci-name">🥩 蛋白质</span><span class="ci-tag tag-nutrition">补充</span></div>
      <div class="nutri-bar-wrap"><div class="nutri-bar-fill protein" style="width:${proteinPct}%"></div></div>
      <div class="nutri-counter"><span style="font-size:0.9rem;font-weight:800">${proteinCount}</span> / <span>${state.proteinTarget}</span> g</div>
      <div class="food-grid">${proteinFoods.map(f=>`<button class="food-btn" data-food="${f.grams}">${f.name}<span class="food-grams">+${f.grams}g</span></button>`).join('')}</div></div>`;
    list.appendChild(proteinItem);

    // Bind
    list.querySelectorAll('.ci-check[data-ex]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();toggleExercise(b.dataset.ex);}));
    list.querySelectorAll('.ci-check[data-nutri]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();toggleNutrition(b.dataset.nutri);}));
    list.querySelectorAll('.set-dot').forEach(d=>d.addEventListener('click',e=>{e.stopPropagation();clickSet(d.dataset.ex,parseInt(d.dataset.set));}));
    list.querySelectorAll('.ci-start-btn').forEach(b=>b.addEventListener('click',e=>{
      e.stopPropagation();const exId=b.dataset.ex,card=b.closest('.check-item');
      b.style.display='none';card.querySelector('.ci-pause-btn').style.display='';card.querySelector('.ci-restart-btn').style.display='';
      startCountdown(exId,EXERCISES[exId].reps[state.intensity],card);
    }));
    list.querySelectorAll('.ci-pause-btn').forEach(b=>b.addEventListener('click',e=>{
      e.stopPropagation();const cd=document.querySelector(`.ci-countdown[data-ex="${b.dataset.ex}"]`);
      if(cd)cd.querySelector('.cc-pause').click();
      b.textContent=b.textContent.includes('暂停')?'▶ 继续':'⏸ 暂停';
    }));
    list.querySelectorAll('.ci-restart-btn').forEach(b=>b.addEventListener('click',e=>{
      e.stopPropagation();const exId=b.dataset.ex;clearTimer(exId+'_cd');
      const card=b.closest('.check-item');card.querySelector('.ci-countdown').classList.remove('active');
      const data=getDateData(viewDate);
      if(data.exercises[exId]&&data.exercises[exId].doneSets>0&&!data.exercises[exId].completed){
        data.exercises[exId].doneSets--;saveState();
      }
      renderChecklist();renderSummary();
    }));
    list.querySelectorAll('.ci-detail-btn').forEach(b=>b.addEventListener('click',e=>{
      e.stopPropagation();const wrap=document.getElementById('detail-'+b.dataset.ex);
      if(wrap){const open=wrap.classList.toggle('open');b.textContent=open?'收起 ▴':'详情 ▾';}
    }));
    list.querySelectorAll('.ci-skip').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();toggleSkip(b.dataset.ex);}));
    list.querySelectorAll('.nutri-btn').forEach(b=>b.addEventListener('click',e=>{
      e.stopPropagation();adjustNutrition(b.dataset.nutri,parseInt(b.dataset.dir));
      const key=b.dataset.nutri;
      const bar=document.querySelector(`.nutri-bar-fill.${key}`);
      if(bar){bar.classList.remove('bump');void bar.offsetWidth;bar.classList.add('bump');}
    }));
    list.querySelectorAll('.food-btn').forEach(b=>b.addEventListener('click',e=>{
      e.stopPropagation();
      const grams=parseInt(b.dataset.food);
      const data=getDateData(viewDate);
      data.nutrition.protein+=grams;
      saveState();renderChecklist();
      // Trigger bump animation on protein bar
      const bar=document.querySelector('.nutri-bar-fill.protein');
      if(bar){bar.classList.remove('bump');void bar.offsetWidth;bar.classList.add('bump');}
    }));
  }

  function toggleExercise(exId){
    const data=getDateData(viewDate);
    if(!data.exercises[exId])data.exercises[exId]={doneSets:0,completed:false,skipped:false};
    const ex=data.exercises[exId],sets=EXERCISES[exId].sets[state.intensity];
    if(ex.completed){ex.completed=false;ex.doneSets=0;}else{ex.completed=true;ex.doneSets=sets;}
    ex.skipped=false;saveState();syncDataFile();checkConfetti();renderChecklist();renderSummary();
  }

  function clickSet(exId,setIdx){
    const data=getDateData(viewDate);
    if(!data.exercises[exId])data.exercises[exId]={doneSets:0,completed:false,skipped:false};
    const ex=data.exercises[exId],sets=EXERCISES[exId].sets[state.intensity],exercise=EXERCISES[exId];
    if(setIdx<ex.doneSets){ex.doneSets=setIdx;ex.completed=false;saveState();renderChecklist();renderSummary();return;}
    ex.doneSets=setIdx+1;
    if(ex.doneSets>=sets)ex.completed=true;
    saveState();syncDataFile();checkConfetti();
    if(exercise.isTimed&&!ex.completed&&ex.doneSets<sets){
      renderChecklist();renderSummary();
      const card=document.querySelector(`.check-item[data-ex-id="${exId}"]`);
      if(card){card.querySelector('.ci-start-btn').style.display='none';card.querySelector('.ci-pause-btn').style.display='';card.querySelector('.ci-restart-btn').style.display='';startCountdown(exId,exercise.reps[state.intensity],card);}
    }else if(!ex.completed&&exercise.rest[state.intensity]>0){
      renderChecklist();renderSummary();
      const card=document.querySelector(`.check-item[data-ex-id="${exId}"]`);
      if(card)startRestTimer(exId,exercise.rest[state.intensity],card);
    }else{renderChecklist();renderSummary();}
  }

  function toggleSkip(exId){
    const data=getDateData(viewDate);
    if(!data.exercises[exId])data.exercises[exId]={doneSets:0,completed:false,skipped:false};
    data.exercises[exId].skipped=!data.exercises[exId].skipped;
    if(data.exercises[exId].skipped)data.exercises[exId].completed=false;
    saveState();renderChecklist();renderSummary();
  }

  function toggleNutrition(key){
    const data=getDateData(viewDate);
    const target=key==='water'?state.waterTarget:state.proteinTarget;
    data.nutrition[key]=data.nutrition[key]>=target?0:target;
    saveState();renderChecklist();
  }
  function adjustNutrition(key,dir){
    const data=getDateData(viewDate);
    data.nutrition[key]=Math.max(0,data.nutrition[key]+dir*(key==='water'?1:10));
    saveState();renderChecklist();
  }

  // ===== Stats =====
  function showStats(){
    document.getElementById('checklist').classList.add('hidden');
    document.querySelector('.workout-title-bar').classList.add('hidden');
    document.querySelector('.summary-bar').classList.add('hidden');
    document.getElementById('statsPage').classList.remove('hidden');
    renderStats();
  }
  function hideStats(){
    document.getElementById('checklist').classList.remove('hidden');
    document.querySelector('.workout-title-bar').classList.remove('hidden');
    document.querySelector('.summary-bar').classList.remove('hidden');
    document.getElementById('statsPage').classList.add('hidden');
  }

  function renderStats(){
    const keys=Object.keys(state.history);
    const completed=keys.filter(k=>state.history[k].completed);
    let streak=0;const d=new Date();
    while(true){const key=dateKey(d);if(state.history[key]&&state.history[key].completed){streak++;d.setDate(d.getDate()-1);}else break;}

    const startOfWeek=new Date();startOfWeek.setDate(startOfWeek.getDate()-startOfWeek.getDay());
    let weekDone=0,weekTotal=0;
    for(let i=0;i<7;i++){const dd=new Date(startOfWeek);dd.setDate(startOfWeek.getDate()+i);const key=dateKey(dd),plan=getWeeklyPlan(state.focus)[dd.getDay()];
      weekTotal+=plan.exercises.length;
      if(state.history[key])weekDone+=plan.exercises.filter(id=>state.history[key].exercises[id]&&state.history[key].exercises[id].completed).length;}

    let totalCal=0;
    keys.forEach(key=>{const dayData=state.history[key],dd=new Date(key),plan=getWeeklyPlan(state.focus)[dd.getDay()];
      plan.exercises.forEach(id=>{const ex=EXERCISES[id],sets=ex.sets[state.intensity];
        const ds=dayData.exercises[id]?(dayData.exercises[id].completed?sets:dayData.exercises[id].doneSets):0;
        totalCal+=(CAL_PER_SET[id]||8)*ds;});});

    document.getElementById('statStreak').textContent=streak;
    document.getElementById('statTotal').textContent=completed.length;
    document.getElementById('statCal').textContent=totalCal;
    document.getElementById('statWeek').textContent=weekTotal>0?Math.round((weekDone/weekTotal)*100)+'%':'0%';

    // History
    const list=document.getElementById('historyList');list.innerHTML='';
    [...keys].sort().reverse().slice(0,14).forEach(key=>{
      const data=state.history[key],date=new Date(key);
      let badgeClass='rest',badgeText='休息日';
      if(data.completed){badgeClass='done';badgeText='✓ 完成';}
      else if(Object.values(data.exercises).some(e=>e.doneSets>0)){badgeClass='partial';badgeText='部分';}
      const item=document.createElement('div');item.className='history-item';
      item.innerHTML=`<div><div class="history-date">${['周日','周一','周二','周三','周四','周五','周六'][date.getDay()]} ${date.getMonth()+1}/${date.getDate()}</div><div class="history-info">${getWeeklyPlan(state.focus)[date.getDay()].name}</div></div><span class="history-badge ${badgeClass}">${badgeText}</span>`;
      list.appendChild(item);
    });

    renderCharts();
  }

  function renderCharts(){
    const now=new Date();
    const labels=[],completionData=[],bodyPartData={arm:0,chest:0,leg:0,run:0,core:0};

    for(let i=statsRange-1;i>=0;i--){
      const d=new Date(now);d.setDate(now.getDate()-i);
      const key=dateKey(d),data=state.history[key]||{exercises:{}};
      const plan=getWeeklyPlan(state.focus)[d.getDay()];
      const done=plan.exercises.filter(id=>data.exercises[id]&&data.exercises[id].completed).length;
      const pct=plan.exercises.length>0?Math.round((done/plan.exercises.length)*100):0;
      labels.push(`${d.getMonth()+1}/${d.getDate()}`);
      completionData.push(pct);

      // Body part accumulation
      plan.exercises.forEach(id=>{
        if(data.exercises[id]&&data.exercises[id].completed){
          const cat=EXERCISES[id].category;
          if(bodyPartData[cat]!==undefined)bodyPartData[cat]++;
        }
      });
    }

    // Line Chart
    const lineCtx=document.getElementById('lineChart').getContext('2d');
    if(lineChart)lineChart.destroy();
    lineChart=new Chart(lineCtx,{
      type:'line',
      data:{labels,datasets:[{label:'完成率%',data:completionData,
        borderColor:'#34c759',backgroundColor:'rgba(52,199,89,0.1)',
        fill:true,tension:0.4,pointRadius:4,pointBackgroundColor:'#34c759',borderWidth:2}]},
      options:{responsive:true,maintainAspectRatio:false,
        scales:{y:{beginAtZero:true,max:100,ticks:{callback:v=>v+'%',font:{size:11}},grid:{color:'rgba(0,0,0,0.04)'}},
                x:{ticks:{font:{size:10}},grid:{display:false}}},
        plugins:{legend:{display:false}}}
    });

    // Pie Chart
    const partLabels=['手臂','胸部','腿部','有氧','核心'];
    const partKeys=['arm','chest','leg','run','core'];
    const partColors=['#ff3b30','#007aff','#af52de','#ff9500','#5ac8fa'];
    const partValues=partKeys.map(k=>bodyPartData[k]);
    const pieCtx=document.getElementById('pieChart').getContext('2d');
    if(pieChart)pieChart.destroy();
    pieChart=new Chart(pieCtx,{
      type:'doughnut',
      data:{labels:partLabels,datasets:[{data:partValues,backgroundColor:partColors,borderWidth:2,borderColor:'#fff'}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{position:'bottom',labels:{padding:12,font:{size:12},usePointStyle:true}}}}
    });
  }

  // ===== Settings =====
  function openSettings(){
    document.getElementById('settingsModal').classList.remove('hidden');
    document.querySelectorAll('[data-intensity]').forEach(b=>b.classList.toggle('active',b.dataset.intensity===state.intensity));
    document.querySelectorAll('[data-focus]').forEach(b=>b.classList.toggle('active',b.dataset.focus===state.focus));
    document.getElementById('waterTargetSetting').textContent=state.waterTarget;
    document.getElementById('proteinTargetSetting').textContent=state.proteinTarget;
  }
  function closeSettings(){document.getElementById('settingsModal').classList.add('hidden');render();}
  function setupSettings(){
    document.querySelectorAll('[data-intensity]').forEach(b=>{b.addEventListener('click',()=>{
      state.intensity=b.dataset.intensity;saveState();
      document.querySelectorAll('[data-intensity]').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      render();
    });});
    document.querySelectorAll('[data-focus]').forEach(b=>{b.addEventListener('click',()=>{
      state.focus=b.dataset.focus;saveState();
      document.querySelectorAll('[data-focus]').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      render();
    });});
  }
  const settings={adjustTarget(type,delta){
    if(type==='water'){state.waterTarget=Math.max(1,state.waterTarget+delta);document.getElementById('waterTargetSetting').textContent=state.waterTarget;}
    else if(type==='protein'){state.proteinTarget=Math.max(10,state.proteinTarget+delta);document.getElementById('proteinTargetSetting').textContent=state.proteinTarget;}
    saveState();}};

  function resetToday(){delete state.history[dateKey(viewDate)];saveState();prevPct=0;render();closeSettings();}
  function formatTime(s){const m=Math.floor(s/60),sec=s%60;return m>0?`${m}分${sec>0?sec+'秒':''}`:`${sec}秒`;}

  document.addEventListener('DOMContentLoaded',()=>{init();setupSettings();});
  return {settings,closeSettings,resetToday};
})();
