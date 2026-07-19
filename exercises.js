// ===== 动作库 =====
const EXERCISES = {
  // ===== 手臂 (Arm) =====
  bicep_curl: {
    name: '哑铃弯举',
    category: 'arm', tag: '手臂', tagClass: 'tag-arm',
    target: '肱二头肌', equipment: '哑铃',
    description: '基础二头肌训练，站姿弯举',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="32" x2="38" y2="44" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="38;50;38" dur="1.6s" repeatCount="indefinite"/><animate attributeName="y2" values="44;30;44" dur="1.6s" repeatCount="indefinite"/></line><ellipse cx="38" cy="44" rx="4" ry="2.5" fill="#FF9500"><animate attributeName="cx" values="38;50;38" dur="1.6s" repeatCount="indefinite"/><animate attributeName="cy" values="44;30;44" dur="1.6s" repeatCount="indefinite"/></ellipse></svg>`,
    steps: ['双脚与肩同宽站立，双手各握一只哑铃，掌心朝前','大臂紧贴身体两侧，保持不动','呼气，弯曲手肘将哑铃举至肩部高度','吸气，缓慢放下哑铃回到起始位置','全程保持身体稳定，不要晃动'],
    tips: ['避免借助身体摆动发力','控制下放速度，离心阶段更重要','顶峰收缩1秒效果更好'],
    sets: { easy: 3, standard: 4, hard: 5 },
    reps: { easy: 10, standard: 12, hard: 15 },
    rest: { easy: 30, standard: 45, hard: 45 }
  },

  hammer_curl: {
    name: '锤式弯举',
    category: 'arm', tag: '手臂', tagClass: 'tag-arm',
    target: '肱肌 / 肱桡肌', equipment: '哑铃',
    description: '掌心相对的弯举变体，强化手臂厚度',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="32" x2="38" y2="44" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="38;50;38" dur="1.8s" repeatCount="indefinite"/><animate attributeName="y2" values="44;30;44" dur="1.8s" repeatCount="indefinite"/></line><rect x="36" y="41" width="5" height="8" rx="2" fill="#FF9500"><animate attributeName="x" values="36;48;36" dur="1.8s" repeatCount="indefinite"/><animate attributeName="y" values="41;27;41" dur="1.8s" repeatCount="indefinite"/></rect></svg>`,
    steps: ['双脚与肩同宽，双手握哑铃放于体侧，掌心相对','大臂固定不动，呼气弯举哑铃','将哑铃举至肩部高度，掌心始终相对','吸气缓慢放下','可交替双手进行'],
    tips: ['锤式握法能更多刺激肱肌','比普通弯举更能锻炼前臂','注意不要甩动身体'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 12, hard: 15 },
    rest: { easy: 30, standard: 45, hard: 45 }
  },

  tricep_dip: {
    name: '椅子臂屈伸',
    category: 'arm', tag: '手臂', tagClass: 'tag-arm',
    target: '肱三头肌', equipment: '椅子/徒手',
    description: '利用椅子自重训练三头肌',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="22" r="7" fill="#34c759" opacity="0.85"/><line x1="50" y1="29" x2="50" y2="50" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="50" x2="42" y2="68" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="50" x2="58" y2="68" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="36" x2="36" y2="36" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y1" values="36;44;36" dur="1.8s" repeatCount="indefinite"/><animate attributeName="y2" values="36;44;36" dur="1.8s" repeatCount="indefinite"/></line><line x1="50" y1="36" x2="64" y2="36" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y1" values="36;44;36" dur="1.8s" repeatCount="indefinite"/><animate attributeName="y2" values="36;44;36" dur="1.8s" repeatCount="indefinite"/></line><rect x="26" y="50" width="12" height="3" rx="1.5" fill="#9E9E9E" opacity="0.4"/><rect x="62" y="50" width="12" height="3" rx="1.5" fill="#9E9E9E" opacity="0.4"/></svg>`,
    steps: ['背对椅子站立，双手撑在椅子边缘，指尖朝前','双脚向前伸直，臀部悬空','吸气，弯曲手肘让身体下降','呼气，撑起身体回到起始位置','保持背部贴近椅子'],
    tips: ['手肘朝后不要外展','屈膝可以降低难度','避免下降过深保护肩关节'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 8, standard: 12, hard: 15 },
    rest: { easy: 45, standard: 45, hard: 60 }
  },

  overhead_extension: {
    name: '颈后臂屈伸',
    category: 'arm', tag: '手臂', tagClass: 'tag-arm',
    target: '肱三头肌长头', equipment: '哑铃',
    description: '针对三头肌长头的经典动作',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="30" x2="42" y2="18" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="18;12;18" dur="1.6s" repeatCount="indefinite"/></line><line x1="50" y1="30" x2="58" y2="18" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="18;12;18" dur="1.6s" repeatCount="indefinite"/></line><ellipse cx="50" cy="10" rx="5" ry="3" fill="#FF9500"><animate attributeName="cy" values="10;4;10" dur="1.6s" repeatCount="indefinite"/></ellipse></svg>`,
    steps: ['站姿或坐姿，双手握一只哑铃举过头顶','大臂紧贴耳侧保持不动','吸气弯曲手肘将哑铃降至颈后','呼气伸展手肘举回头顶','全程大臂保持竖直'],
    tips: ['大臂始终贴近耳朵','不要让手肘外展','选择合适重量避免肩部不适'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 12, hard: 12 },
    rest: { easy: 30, standard: 45, hard: 45 }
  },

  // ===== 胸 (Chest) =====
  push_up: {
    name: '俯卧撑',
    category: 'chest', tag: '胸部', tagClass: 'tag-chest',
    target: '胸大肌 / 三头肌', equipment: '徒手',
    description: '最经典的胸部训练动作',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="20" cy="30" r="6" fill="#007aff" opacity="0.8"/><line x1="26" y1="32" x2="72" y2="38" stroke="#007aff" stroke-width="3.5" stroke-linecap="round"><animate attributeName="y1" values="32;38;32" dur="2s" repeatCount="indefinite"/><animate attributeName="y2" values="38;44;38" dur="2s" repeatCount="indefinite"/></line><line x1="30" y1="32" x2="24" y2="48" stroke="#007aff" stroke-width="3" stroke-linecap="round"><animate attributeName="y1" values="32;38;32" dur="2s" repeatCount="indefinite"/></line><line x1="72" y1="38" x2="80" y2="56" stroke="#007aff" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['双手撑地略宽于肩，身体从头到脚成一条直线','核心收紧，不要塌腰或撅臀','吸气弯曲手肘下降身体至胸部接近地面','呼气推起回到起始位置','全程保持身体稳定'],
    tips: ['不要耸肩保持颈部自然','手掌在肩膀正下方或略宽','太难可以先做跪姿俯卧撑'],
    sets: { easy: 3, standard: 4, hard: 5 },
    reps: { easy: 8, standard: 12, hard: 20 },
    rest: { easy: 45, standard: 45, hard: 60 }
  },

  dumbbell_press: {
    name: '哑铃卧推',
    category: 'chest', tag: '胸部', tagClass: 'tag-chest',
    target: '胸大肌', equipment: '哑铃 / 床',
    description: '仰卧哑铃推举，高效练胸',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="42" r="6" fill="#007aff" opacity="0.8"/><line x1="50" y1="48" x2="50" y2="58" stroke="#007aff" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="50" x2="30" y2="40" stroke="#007aff" stroke-width="3" stroke-linecap="round"/><line x1="30" y1="40" x2="26" y2="28" stroke="#007aff" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="28;36;28" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="50" x2="70" y2="40" stroke="#007aff" stroke-width="3" stroke-linecap="round"/><line x1="70" y1="40" x2="74" y2="28" stroke="#007aff" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="28;36;28" dur="2s" repeatCount="indefinite"/></line><rect x="10" y="60" width="80" height="3" rx="1.5" fill="#9E9E9E" opacity="0.3"/></svg>`,
    steps: ['仰卧在床边或地板上，双手各握一只哑铃','大臂与地面平行，小臂垂直地面','呼气将哑铃向上推至胸部正上方','吸气缓慢放下回到起始位置','推起时可以微微向内合拢'],
    tips: ['推起时不要锁死手肘','肩胛骨收紧贴紧地面','可以在地上铺瑜伽垫保护背部'],
    sets: { easy: 3, standard: 4, hard: 4 },
    reps: { easy: 10, standard: 12, hard: 15 },
    rest: { easy: 45, standard: 45, hard: 60 }
  },

  dumbbell_fly: {
    name: '哑铃飞鸟',
    category: 'chest', tag: '胸部', tagClass: 'tag-chest',
    target: '胸大肌', equipment: '哑铃 / 床',
    description: '仰卧飞鸟，拉伸胸肌线条',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="38" r="6" fill="#007aff" opacity="0.8"/><line x1="50" y1="44" x2="50" y2="56" stroke="#007aff" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="48" x2="18" y2="42" stroke="#007aff" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="18;38;18" dur="2s" repeatCount="indefinite"/><animate attributeName="y2" values="42;38;42" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="48" x2="82" y2="42" stroke="#007aff" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="82;62;82" dur="2s" repeatCount="indefinite"/><animate attributeName="y2" values="42;38;42" dur="2s" repeatCount="indefinite"/></line><rect x="12" y="58" width="76" height="3" rx="1.5" fill="#9E9E9E" opacity="0.3"/></svg>`,
    steps: ['仰卧在床上，双手各握哑铃举至胸部正上方','双臂微屈保持固定弧度，掌心相对','吸气双臂向两侧打开下降','感到胸部拉伸后呼气合拢双臂','想象环抱一棵大树的动作'],
    tips: ['手臂始终保持微屈不要伸直','下降幅度以感到拉伸为准','动作缓慢控制不要借力'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 12, hard: 15 },
    rest: { easy: 30, standard: 45, hard: 45 }
  },

  // ===== 肩 (Shoulder) =====
  shoulder_press: {
    name: '哑铃肩推',
    category: 'arm', tag: '肩部', tagClass: 'tag-arm',
    target: '三角肌前束 / 中束', equipment: '哑铃',
    description: '站姿哑铃推举，练肩核心动作',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="28" x2="36" y2="20" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="20;8;20" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="28" x2="64" y2="20" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="20;8;20" dur="2s" repeatCount="indefinite"/></line><ellipse cx="36" cy="18" rx="4" ry="2.5" fill="#FF9500"><animate attributeName="cy" values="18;6;18" dur="2s" repeatCount="indefinite"/></ellipse><ellipse cx="64" cy="18" rx="4" ry="2.5" fill="#FF9500"><animate attributeName="cy" values="18;6;18" dur="2s" repeatCount="indefinite"/></ellipse></svg>`,
    steps: ['站立或坐姿，双手握哑铃举至肩部高度','掌心朝前，大臂与地面平行','呼气将哑铃向上推至头顶','吸气缓慢放下回到肩部高度','保持核心收紧不要塌腰'],
    tips: ['推举时不要过度后仰','手肘不要锁死','选择合适重量避免肩部受伤'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 12, hard: 12 },
    rest: { easy: 30, standard: 45, hard: 45 }
  },

  lateral_raise: {
    name: '哑铃侧平举',
    category: 'arm', tag: '肩部', tagClass: 'tag-arm',
    target: '三角肌中束', equipment: '哑铃',
    description: '侧平举打造肩部宽度',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="28" x2="24" y2="28" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="28;22;28" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="28" x2="76" y2="28" stroke="#34c759" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="28;22;28" dur="2s" repeatCount="indefinite"/></line><ellipse cx="22" cy="28" rx="3" ry="2" fill="#FF9500"><animate attributeName="cy" values="28;22;28" dur="2s" repeatCount="indefinite"/></ellipse><ellipse cx="78" cy="28" rx="3" ry="2" fill="#FF9500"><animate attributeName="cy" values="28;22;28" dur="2s" repeatCount="indefinite"/></ellipse></svg>`,
    steps: ['双脚与肩同宽站立，双手握哑铃放于体侧','微屈手肘，呼气将哑铃向两侧举起','举至与肩同高，小指略高于拇指','吸气缓慢放下回到起始位','想象倒水的动作'],
    tips: ['不要耸肩用斜方肌代偿','手肘微屈保持不变','控制速度不要甩动'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 12, hard: 15 },
    rest: { easy: 30, standard: 30, hard: 45 }
  },

  // ===== 腿 (Leg) =====
  squat: {
    name: '徒手深蹲',
    category: 'leg', tag: '腿部', tagClass: 'tag-leg',
    target: '股四头肌 / 臀大肌', equipment: '徒手',
    description: '最基础的下肢训练动作',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#af52de" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="44" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"><animate attributeName="y2" values="44;50;44" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="52" x2="36" y2="76" stroke="#af52de" stroke-width="3" stroke-linecap="round"><animate attributeName="x1" values="50;50;50" dur="2s" repeatCount="indefinite"/><animate attributeName="y1" values="52;58;52" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="52" x2="64" y2="76" stroke="#af52de" stroke-width="3" stroke-linecap="round"><animate attributeName="x1" values="50;50;50" dur="2s" repeatCount="indefinite"/><animate attributeName="y1" values="52;58;52" dur="2s" repeatCount="indefinite"/></line><line x1="50" y1="32" x2="36" y2="38" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="32" x2="64" y2="38" stroke="#af52de" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['双脚与肩同宽或略宽，脚尖微微外展','挺胸收腹，双手可前平举保持平衡','吸气屈髋屈膝下蹲，想象坐椅子','蹲至大腿与地面平行或略低','呼气脚跟发力站起回到起始位'],
    tips: ['膝盖方向与脚尖一致','重心在脚跟不要踮脚','下蹲时膝盖不要超过脚尖太多'],
    sets: { easy: 3, standard: 4, hard: 5 },
    reps: { easy: 12, standard: 15, hard: 20 },
    rest: { easy: 30, standard: 45, hard: 45 }
  },

  lunge: {
    name: '交替弓步蹲',
    category: 'leg', tag: '腿部', tagClass: 'tag-leg',
    target: '股四头肌 / 臀肌', equipment: '徒手',
    description: '单腿主导的下肢训练',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="45" cy="14" r="7" fill="#af52de" opacity="0.85"/><line x1="45" y1="21" x2="45" y2="42" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"/><line x1="45" y1="42" x2="32" y2="60" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="32" y1="60" x2="28" y2="78" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="45" y1="42" x2="68" y2="56" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="68" y1="56" x2="72" y2="78" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="45" y1="30" x2="32" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="45" y1="30" x2="58" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['站立位，双手叉腰或自然下垂','一条腿向前迈出一大步','吸气下降直到前后膝都约90度','后膝接近但不触碰地面','呼气前脚发力回到站姿换腿重复'],
    tips: ['前膝不超过脚尖','上身保持直立不要前倾','步幅太小会影响训练效果'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 8, standard: 10, hard: 12 },
    rest: { easy: 30, standard: 45, hard: 60 }
  },

  wall_sit: {
    name: '靠墙静蹲',
    category: 'leg', tag: '腿部', tagClass: 'tag-leg',
    target: '股四头肌', equipment: '墙壁',
    description: '等长收缩训练，强化大腿耐力',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="35" cy="18" r="7" fill="#af52de" opacity="0.85"/><line x1="35" y1="25" x2="35" y2="48" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"/><line x1="35" y1="48" x2="38" y2="60" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="38" y1="60" x2="38" y2="78" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="35" y1="48" x2="58" y2="60" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="58" y1="60" x2="58" y2="78" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="16" y1="10" x2="16" y2="78" stroke="#9E9E9E" stroke-width="2" stroke-dasharray="4 3"/></svg>`,
    steps: ['背靠墙壁站立','双脚向前迈出一步与肩同宽','背部贴墙缓慢下蹲至大腿与地面平行','保持姿势不动维持30-60秒','感到大腿酸胀后缓慢站起'],
    tips: ['背部始终贴紧墙壁','膝盖不要超过脚尖','可以逐渐增加保持时间'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 20, standard: 30, hard: 45 },
    rest: { easy: 30, standard: 45, hard: 45 },
    unit: '秒', isTimed: true
  },

  calf_raise: {
    name: '提踵',
    category: 'leg', tag: '腿部', tagClass: 'tag-leg',
    target: '腓肠肌 / 比目鱼肌', equipment: '徒手',
    description: '锻炼小腿肌肉',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#af52de" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="52" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="52" x2="42" y2="72" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="42" y1="72" x2="40" y2="78" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="58" y2="72" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="58" y1="72" x2="60" y2="78" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="30" x2="36" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="30" x2="64" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['站立位双脚与肩同宽','可以扶墙或椅子保持平衡','呼气踮起脚尖用前脚掌支撑','顶峰停留1-2秒感受小腿收缩','吸气缓慢放下脚跟'],
    tips: ['顶峰收缩很重要','可以在台阶边缘做增加行程','下放时脚跟低于台阶增加拉伸'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 15, standard: 20, hard: 25 },
    rest: { easy: 20, standard: 30, hard: 30 }
  },

  // ===== 核心 (Core) =====
  plank: {
    name: '平板支撑',
    category: 'core', tag: '核心', tagClass: 'tag-core',
    target: '核心肌群', equipment: '徒手',
    description: '核心稳定性训练经典动作',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="20" cy="36" r="6" fill="#5ac8fa" opacity="0.8"/><line x1="26" y1="38" x2="80" y2="40" stroke="#5ac8fa" stroke-width="3.5" stroke-linecap="round"/><line x1="30" y1="38" x2="26" y2="52" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/><line x1="80" y1="40" x2="84" y2="54" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['俯卧双肘撑地，肘在肩膀正下方','脚尖着地，身体从头到脚成一条直线','核心收紧不要塌腰或撅臀','保持自然呼吸不要憋气','维持姿势直到力竭'],
    tips: ['目光看向地面不要抬头','臀部不要太高或太低','可以看计时器挑战自己'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 20, standard: 30, hard: 45 },
    rest: { easy: 30, standard: 45, hard: 45 },
    unit: '秒', isTimed: true
  },

  russian_twist: {
    name: '俄罗斯转体',
    category: 'core', tag: '核心', tagClass: 'tag-core',
    target: '腹斜肌', equipment: '哑铃/徒手',
    description: '旋转核心训练，强化侧腹',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="24" r="6" fill="#5ac8fa" opacity="0.8"/><line x1="50" y1="30" x2="50" y2="52" stroke="#5ac8fa" stroke-width="3.5" stroke-linecap="round"><animate attributeName="x1" values="48;52;48" dur="1.5s" repeatCount="indefinite"/></line><line x1="50" y1="38" x2="34" y2="44" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="34;66;34" dur="1.5s" repeatCount="indefinite"/></line><line x1="50" y1="38" x2="66" y2="44" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="66;34;66" dur="1.5s" repeatCount="indefinite"/></line><line x1="50" y1="52" x2="40" y2="72" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="52" x2="60" y2="72" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['坐姿，膝盖弯曲，双脚离地','上身后倾约45度，双手握拳或持哑铃','转动躯干将手移向一侧','再转向另一侧，交替进行','保持核心收紧'],
    tips: ['转动幅度要大','脚离地增加难度','速度不要太快'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 16, hard: 20 },
    rest: { easy: 30, standard: 30, hard: 45 }
  },

  // ===== 跑步 (Running) =====
  jog: {
    name: '慢跑',
    category: 'run', tag: '跑步', tagClass: 'tag-run',
    target: '心肺 / 全身', equipment: '跑鞋',
    description: '中低强度有氧训练',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="55" cy="14" r="7" fill="#ff9500" opacity="0.85"/><line x1="55" y1="21" x2="50" y2="48" stroke="#ff9500" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="34" x2="38" y2="26" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="34" x2="62" y2="42" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="48" x2="36" y2="66" stroke="#ff9500" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="36;42;36" dur="0.8s" repeatCount="indefinite"/></line><line x1="50" y1="48" x2="62" y2="62" stroke="#ff9500" stroke-width="3" stroke-linecap="round"><animate attributeName="x2" values="62;56;62" dur="0.8s" repeatCount="indefinite"/></line></svg>`,
    steps: ['热身步行2-3分钟后开始慢跑','保持能正常对话的速度','呼吸均匀用鼻子和嘴巴同时呼吸','手臂自然摆动步幅不要太大','结束前逐渐减速改为步行'],
    tips: ['跑前热身和跑后拉伸很重要','选择平坦的路面','穿有缓震的跑鞋保护膝盖'],
    sets: { easy: 1, standard: 1, hard: 2 },
    reps: { easy: 300, standard: 420, hard: 300 },
    rest: { easy: 0, standard: 0, hard: 60 },
    unit: '秒', isTimed: true
  },

  high_knees: {
    name: '高抬腿',
    category: 'run', tag: '有氧', tagClass: 'tag-run',
    target: '心肺 / 髋屈肌', equipment: '徒手',
    description: '原地高抬腿跑，提升心率',
    animSvg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="14" r="7" fill="#ff9500" opacity="0.85"/><line x1="50" y1="21" x2="50" y2="48" stroke="#ff9500" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="48" x2="38" y2="38" stroke="#ff9500" stroke-width="3" stroke-linecap="round"><animate attributeName="y2" values="38;30;38" dur="0.6s" repeatCount="indefinite"/></line><line x1="50" y1="48" x2="62" y2="72" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="30" x2="38" y2="24" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="30" x2="62" y2="24" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/></svg>`,
    steps: ['原地站立，双脚与肩同宽','交替抬腿至大腿与地面平行','手臂配合摆动','保持节奏稳定','落地时前脚掌先着地'],
    tips: ['膝盖尽量抬高','上身保持直立不要后仰','核心收紧保持稳定'],
    sets: { easy: 3, standard: 4, hard: 5 },
    reps: { easy: 15, standard: 20, hard: 30 },
    rest: { easy: 30, standard: 30, hard: 45 }
  }
};

// ===== 周计划 - 3~4个动作/天，合理安排休息 =====
// ===== Focus-based Plan Generator =====
// Based on mainstream fitness principles: compound first, isolation after, 48h rest per muscle group
const FOCUS_PLANS = {
  arm: {
    label: '手臂',
    0: { name:'二头肌 + 三头肌', exercises:['bicep_curl','hammer_curl','tricep_dip','overhead_extension'], time:18 },
    1: { name:'肩部 + 有氧', exercises:['shoulder_press','lateral_raise','high_knees'], time:15 },
    2: { name:'休息日', exercises:['russian_twist'], time:5 },
    3: { name:'手臂强化', exercises:['bicep_curl','tricep_dip','hammer_curl','overhead_extension'], time:20 },
    4: { name:'休息日', exercises:['russian_twist','calf_raise'], time:8 },
    5: { name:'腿部 + 核心', exercises:['squat','lunge','wall_sit','russian_twist'], time:18 },
    6: { name:'手臂 + 胸部', exercises:['hammer_curl','tricep_dip','push_up','dumbbell_fly'], time:18 }
  },
  chest: {
    label: '胸部',
    0: { name:'胸部 + 三头', exercises:['push_up','dumbbell_press','dumbbell_fly','tricep_dip'], time:20 },
    1: { name:'休息日', exercises:['russian_twist'], time:5 },
    2: { name:'肩部 + 有氧', exercises:['shoulder_press','lateral_raise','high_knees'], time:15 },
    3: { name:'胸部 + 二头', exercises:['push_up','dumbbell_fly','bicep_curl','hammer_curl'], time:20 },
    4: { name:'休息日', exercises:['russian_twist','calf_raise'], time:8 },
    5: { name:'腿部 + 核心', exercises:['squat','lunge','wall_sit','russian_twist'], time:18 },
    6: { name:'肩部 + 手臂', exercises:['shoulder_press','lateral_raise','bicep_curl','tricep_dip'], time:18 }
  },
  leg: {
    label: '腿部',
    0: { name:'股四头 + 臀部', exercises:['squat','lunge','wall_sit','calf_raise'], time:20 },
    1: { name:'上肢推', exercises:['push_up','dumbbell_press','shoulder_press'], time:15 },
    2: { name:'休息日', exercises:['russian_twist'], time:5 },
    3: { name:'股二头 + 臀部', exercises:['squat','lunge','russian_twist','calf_raise'], time:18 },
    4: { name:'休息日', exercises:['calf_raise'], time:5 },
    5: { name:'上肢拉 + 有氧', exercises:['bicep_curl','hammer_curl','high_knees'], time:15 },
    6: { name:'腿部综合', exercises:['squat','wall_sit','lunge','calf_raise'], time:18 }
  },
  shoulder: {
    label: '肩部',
    0: { name:'肩部 + 手臂', exercises:['shoulder_press','lateral_raise','bicep_curl','tricep_dip'], time:20 },
    1: { name:'腿部 + 核心', exercises:['squat','lunge','wall_sit'], time:15 },
    2: { name:'休息日', exercises:['russian_twist'], time:5 },
    3: { name:'肩部强化', exercises:['shoulder_press','lateral_raise','overhead_extension','high_knees'], time:20 },
    4: { name:'休息日', exercises:['russian_twist','calf_raise'], time:8 },
    5: { name:'胸部 + 三头', exercises:['push_up','dumbbell_press','dumbbell_fly'], time:15 },
    6: { name:'手臂 + 有氧', exercises:['bicep_curl','hammer_curl','high_knees'], time:15 }
  },
  full: {
    label: '全身',
    0: { name:'上肢推', exercises:['push_up','dumbbell_press','shoulder_press'], time:15 },
    1: { name:'下肢', exercises:['squat','lunge','wall_sit','calf_raise'], time:18 },
    2: { name:'休息日', exercises:['russian_twist'], time:5 },
    3: { name:'上肢拉', exercises:['bicep_curl','hammer_curl','tricep_dip','overhead_extension'], time:18 },
    4: { name:'休息日', exercises:['calf_raise'], time:5 },
    5: { name:'有氧 + 核心', exercises:['high_knees','russian_twist','plank'], time:15 },
    6: { name:'全身综合', exercises:['squat','push_up','bicep_curl','lateral_raise'], time:18 }
  }
};

function getWeeklyPlan(focus) {
  const plan = FOCUS_PLANS[focus] || FOCUS_PLANS.arm;
  const result = {};
  for (let i = 0; i < 7; i++) {
    const day = plan[i];
    result[i] = { name: day.name, exercises: day.exercises, estimatedTime: day.time };
  }
  return result;
}
