// ===== 动作库 =====
const EXERCISES = {
  // ===== 手臂 (Arm) =====
  bicep_curl: {
    name: '哑铃弯举',
    category: 'arm', tag: '手臂', tagClass: 'tag-arm',
    target: '肱二头肌', equipment: '哑铃',
    description: '基础二头肌训练，站姿弯举',
    // Key form: elbows PINNED to sides, only forearms rotate up
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <!-- Left arm: elbow stays at (38,36), forearm swings from down to up -->
      <line x1="38" y1="36" x2="38" y2="50" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="38;38;38" dur="1.6s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;32;50" dur="1.6s" repeatCount="indefinite"/>
      </line>
      <!-- Dumbbell on left hand -->
      <rect x="35" y="48" width="7" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="48;30;48" dur="1.6s" repeatCount="indefinite"/>
      </rect>
      <!-- Right arm stays down -->
      <line x1="62" y1="36" x2="62" y2="50" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <rect x="59" y="48" width="7" height="4" rx="1.5" fill="#FF9500" opacity="0.4"/>
    </svg>`,
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
    // Key form: palms face each other (neutral grip), thumbs up throughout
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <!-- Left arm: elbow at side, forearm goes up with vertical dumbbell -->
      <line x1="38" y1="36" x2="38" y2="50" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="50;30;50" dur="1.8s" repeatCount="indefinite"/>
      </line>
      <!-- Vertical dumbbell (hammer grip) -->
      <rect x="36" y="28" width="4" height="8" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="46;26;46" dur="1.8s" repeatCount="indefinite"/>
      </rect>
      <line x1="62" y1="36" x2="62" y2="50" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <rect x="60" y="46" width="4" height="8" rx="1.5" fill="#FF9500" opacity="0.4"/>
    </svg>`,
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
    // Key form: hands on chair behind, elbows point BACK (not out), body lowers straight down
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="20" r="7" fill="#34c759" opacity="0.85"/>
      <!-- Torso: upright, moves up/down -->
      <line x1="50" y1="27" x2="50" y2="48" stroke="#34c759" stroke-width="3.5" stroke-linecap="round">
        <animate attributeName="y1" values="20;26;20" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;54;48" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Arms: elbows bend back, hands stay on chair -->
      <line x1="50" y1="34" x2="38" y2="34" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="34;40;34" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="34;40;34" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Elbow angle: forearm goes down from elbow -->
      <line x1="38" y1="34" x2="38" y2="46" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="34;40;34" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Chair -->
      <rect x="28" y="44" width="20" height="3" rx="1.5" fill="#9E9E9E" opacity="0.5"/>
      <rect x="30" y="47" width="4" height="16" rx="1" fill="#9E9E9E" opacity="0.4"/>
      <rect x="44" y="47" width="4" height="16" rx="1" fill="#9E9E9E" opacity="0.4"/>
      <!-- Legs extended -->
      <line x1="50" y1="48" x2="68" y2="54" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="48;54;48" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="68" y1="54" x2="72" y2="74" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    steps: ['背对椅子站立，双手撑在椅子边缘，指尖朝前','双脚向前伸直，臀部悬空','吸气弯曲手肘让身体下降','呼气撑起身体回到起始位置','保持背部贴近椅子'],
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
    // Key form: upper arms stay by ears, only forearms move behind head
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <!-- Upper arms: fixed by ears, pointing up -->
      <line x1="42" y1="20" x2="42" y2="10" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <line x1="58" y1="20" x2="58" y2="10" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <!-- Forearms: bend from elbow behind head -->
      <line x1="42" y1="10" x2="42" y2="6" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="6;18;6" dur="1.6s" repeatCount="indefinite"/>
      </line>
      <line x1="58" y1="10" x2="58" y2="6" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="6;18;6" dur="1.6s" repeatCount="indefinite"/>
      </line>
      <!-- Dumbbell -->
      <ellipse cx="50" cy="4" rx="5" ry="3" fill="#FF9500">
        <animate attributeName="cy" values="4;16;4" dur="1.6s" repeatCount="indefinite"/>
      </ellipse>
    </svg>`,
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
    // Key form: body stays straight, elbows at 45°, chest to ground
    animSvg: `<svg viewBox="0 0 100 100">
      <!-- Body: straight line from head to heels, moves up/down -->
      <circle cx="22" cy="34" r="6" fill="#007aff" opacity="0.8">
        <animate attributeName="cy" values="34;42;34" dur="2s" repeatCount="indefinite"/>
      </circle>
      <line x1="28" y1="36" x2="78" y2="40" stroke="#007aff" stroke-width="3.5" stroke-linecap="round">
        <animate attributeName="y1" values="36;44;36" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="40;48;40" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Arms: elbows bend, hands on ground -->
      <line x1="32" y1="38" x2="28" y2="52" stroke="#007aff" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="38;46;38" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="28" y1="52" x2="28" y2="54" stroke="#007aff" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Feet -->
      <line x1="78" y1="40" x2="82" y2="54" stroke="#007aff" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="40;48;40" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Ground line -->
      <line x1="10" y1="56" x2="90" y2="56" stroke="#e5e5ea" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>`,
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
    // Key form: lying on back, press dumbbells up from chest level
    animSvg: `<svg viewBox="0 0 100 100">
      <!-- Bench/bed -->
      <rect x="10" y="58" width="80" height="3" rx="1.5" fill="#9E9E9E" opacity="0.3"/>
      <!-- Body lying down -->
      <circle cx="24" cy="50" r="5" fill="#007aff" opacity="0.8"/>
      <line x1="28" y1="52" x2="72" y2="54" stroke="#007aff" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms: press up from chest -->
      <line x1="40" y1="52" x2="40" y2="36" stroke="#007aff" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="36;48;36" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="52" y1="52" x2="52" y2="36" stroke="#007aff" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="36;48;36" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Dumbbells -->
      <rect x="37" y="33" width="7" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="33;45;33" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="49" y="33" width="7" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="33;45;33" dur="2s" repeatCount="indefinite"/>
      </rect>
      <!-- Legs -->
      <line x1="72" y1="54" x2="78" y2="50" stroke="#007aff" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
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
    // Key form: arms open wide in arc, slight elbow bend maintained
    animSvg: `<svg viewBox="0 0 100 100">
      <rect x="10" y="58" width="80" height="3" rx="1.5" fill="#9E9E9E" opacity="0.3"/>
      <circle cx="24" cy="50" r="5" fill="#007aff" opacity="0.8"/>
      <line x1="28" y1="52" x2="72" y2="54" stroke="#007aff" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms: open wide then close -->
      <line x1="46" y1="50" x2="20" y2="42" stroke="#007aff" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="20;42;20" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="42;36;42" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <line x1="50" y1="50" x2="76" y2="42" stroke="#007aff" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="76;54;76" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="42;36;42" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <!-- Dumbbells -->
      <rect x="17" y="40" width="6" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="x" values="17;39;17" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="y" values="40;34;40" dur="2.2s" repeatCount="indefinite"/>
      </rect>
      <rect x="74" y="40" width="6" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="x" values="74;52;74" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="y" values="40;34;40" dur="2.2s" repeatCount="indefinite"/>
      </rect>
      <line x1="72" y1="54" x2="78" y2="50" stroke="#007aff" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
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
    // Key form: start at shoulders, press straight up, core tight
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms: from shoulders straight up -->
      <line x1="40" y1="28" x2="40" y2="16" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="16;6;16" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="60" y1="28" x2="60" y2="16" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="16;6;16" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Dumbbells -->
      <rect x="37" y="4" width="7" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="14;4;14" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="57" y="4" width="7" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="14;4;14" dur="2s" repeatCount="indefinite"/>
      </rect>
    </svg>`,
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
    // Key form: arms raise to sides to shoulder height, slight elbow bend
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#34c759" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="52" stroke="#34c759" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="40" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="60" y2="76" stroke="#34c759" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms: raise from sides to shoulder height -->
      <line x1="42" y1="30" x2="30" y2="30" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="30;24;30" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="58" y1="30" x2="70" y2="30" stroke="#34c759" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="30;24;30" dur="2s" repeatCount="indefinite"/>
      </line>
      <!-- Dumbbells -->
      <rect x="27" y="22" width="6" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="28;20;28" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="68" y="22" width="6" height="4" rx="1.5" fill="#FF9500">
        <animate attributeName="y" values="28;20;28" dur="2s" repeatCount="indefinite"/>
      </rect>
    </svg>`,
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
    // Key form: hips back, knees track over toes, chest up, depth to parallel
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#af52de" opacity="0.85"/>
      <!-- Torso: leans slightly forward -->
      <line x1="50" y1="21" x2="50" y2="44" stroke="#af52de" stroke-width="3.5" stroke-linecap="round">
        <animate attributeName="y2" values="44;50;44" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <!-- Thighs: go from vertical to angled -->
      <line x1="50" y1="44" x2="38" y2="56" stroke="#af52de" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="44;50;44" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="56;54;56" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <line x1="50" y1="44" x2="62" y2="56" stroke="#af52de" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="44;50;44" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="56;54;56" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <!-- Shins: stay roughly vertical -->
      <line x1="38" y1="56" x2="36" y2="76" stroke="#af52de" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="56;54;56" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <line x1="62" y1="56" x2="64" y2="76" stroke="#af52de" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="56;54;56" dur="2.2s" repeatCount="indefinite"/>
      </line>
      <!-- Arms forward for balance -->
      <line x1="50" y1="30" x2="36" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="30" x2="64" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
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
    // Key form: step forward, both knees 90°, front knee over ankle
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="44" cy="14" r="7" fill="#af52de" opacity="0.85"/>
      <line x1="44" y1="21" x2="44" y2="42" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Front leg: thigh horizontal, shin vertical -->
      <line x1="44" y1="42" x2="34" y2="54" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="34" y1="54" x2="34" y2="74" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- Back leg: extended behind -->
      <line x1="44" y1="42" x2="60" y2="56" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="56" x2="68" y2="74" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms -->
      <line x1="44" y1="30" x2="32" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="44" y1="30" x2="56" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- 90° angle indicators -->
      <path d="M34 48 L38 48 L38 54" fill="none" stroke="#af52de" stroke-width="1" opacity="0.4"/>
    </svg>`,
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
    // Key form: back flat on wall, thighs parallel to ground, 90° knee angle
    animSvg: `<svg viewBox="0 0 100 100">
      <!-- Wall -->
      <line x1="20" y1="8" x2="20" y2="78" stroke="#9E9E9E" stroke-width="2.5" stroke-dasharray="4 3"/>
      <circle cx="36" cy="18" r="7" fill="#af52de" opacity="0.85"/>
      <!-- Back: flat against wall -->
      <line x1="36" y1="25" x2="36" y2="46" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Thighs: horizontal (parallel to ground) -->
      <line x1="36" y1="46" x2="56" y2="46" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- Shins: vertical -->
      <line x1="56" y1="46" x2="56" y2="68" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- 90° angle marker -->
      <path d="M50 46 L56 46 L56 52" fill="none" stroke="#af52de" stroke-width="1.5" opacity="0.5"/>
      <!-- Arms -->
      <line x1="36" y1="34" x2="24" y2="40" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="36" y1="34" x2="48" y2="40" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- Ground -->
      <line x1="10" y1="70" x2="90" y2="70" stroke="#e5e5ea" stroke-width="1" stroke-dasharray="3 3"/>
    </svg>`,
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
    // Key form: rise onto balls of feet, pause at top, slow lower
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#af52de" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="52" stroke="#af52de" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Arms -->
      <line x1="50" y1="30" x2="36" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="30" x2="64" y2="36" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- Body: rises up -->
      <line x1="50" y1="14" x2="50" y2="8" stroke="#af52de" stroke-width="2" stroke-linecap="round" opacity="0.3">
        <animate attributeName="y2" values="8;4;8" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <!-- Legs -->
      <line x1="50" y1="52" x2="42" y2="72" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="52" x2="58" y2="72" stroke="#af52de" stroke-width="3" stroke-linecap="round"/>
      <!-- Feet: heels rise -->
      <line x1="42" y1="72" x2="38" y2="76" stroke="#af52de" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="72;68;72" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="76;72;76" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <line x1="58" y1="72" x2="62" y2="76" stroke="#af52de" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="72;68;72" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="76;72;76" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <!-- Arrow showing up -->
      <text x="72" y="60" fill="#af52de" font-size="10" font-weight="bold">↑</text>
    </svg>`,
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
    // Key form: straight line head to heels, elbows under shoulders, no sag
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="18" cy="36" r="5" fill="#5ac8fa" opacity="0.8"/>
      <!-- Body: perfectly straight line -->
      <line x1="22" y1="38" x2="82" y2="42" stroke="#5ac8fa" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Forearms on ground -->
      <line x1="26" y1="40" x2="22" y2="52" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/>
      <line x1="22" y1="52" x2="18" y2="52" stroke="#5ac8fa" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Feet -->
      <line x1="82" y1="42" x2="86" y2="52" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/>
      <!-- Ground -->
      <line x1="10" y1="54" x2="92" y2="54" stroke="#e5e5ea" stroke-width="1" stroke-dasharray="3 3"/>
      <!-- Straight line indicator -->
      <line x1="18" y1="30" x2="86" y2="36" stroke="#5ac8fa" stroke-width="0.5" opacity="0.3" stroke-dasharray="2 2"/>
    </svg>`,
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
    // Key form: seated, lean back 45°, rotate torso side to side
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="22" r="6" fill="#5ac8fa" opacity="0.8"/>
      <!-- Torso: leans back, rotates -->
      <line x1="50" y1="28" x2="50" y2="50" stroke="#5ac8fa" stroke-width="3.5" stroke-linecap="round">
        <animate attributeName="x1" values="48;52;48" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="x2" values="52;48;52" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <!-- Arms: rotate with torso -->
      <line x1="50" y1="36" x2="34" y2="40" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="34;66;34" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <line x1="50" y1="36" x2="66" y2="40" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="66;34;66" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <!-- Legs: bent, feet off ground -->
      <line x1="50" y1="50" x2="40" y2="64" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/>
      <line x1="40" y1="64" x2="36" y2="56" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="60" y2="64" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="64" x2="64" y2="56" stroke="#5ac8fa" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    steps: ['坐姿，膝盖弯曲，双脚离地','上身后倾约45度，双手握拳或持哑铃','转动躯干将手移向一侧','再转向另一侧，交替进行','保持核心收紧'],
    tips: ['转动幅度要大','脚离地增加难度','速度不要太快'],
    sets: { easy: 3, standard: 3, hard: 4 },
    reps: { easy: 10, standard: 16, hard: 20 },
    rest: { easy: 30, standard: 30, hard: 45 }
  },

  // ===== 有氧 (Cardio) =====
  high_knees: {
    name: '高抬腿',
    category: 'run', tag: '有氧', tagClass: 'tag-run',
    target: '心肺 / 髋屈肌', equipment: '徒手',
    description: '原地高抬腿跑，提升心率',
    // Key form: knees up to hip height, land on balls of feet
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="50" cy="14" r="7" fill="#ff9500" opacity="0.85"/>
      <line x1="50" y1="21" x2="50" y2="48" stroke="#ff9500" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Left leg: knee up high -->
      <line x1="50" y1="48" x2="40" y2="38" stroke="#ff9500" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y2" values="38;30;38" dur="0.6s" repeatCount="indefinite"/>
      </line>
      <line x1="40" y1="38" x2="36" y2="48" stroke="#ff9500" stroke-width="3" stroke-linecap="round">
        <animate attributeName="y1" values="38;30;38" dur="0.6s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;40;48" dur="0.6s" repeatCount="indefinite"/>
      </line>
      <!-- Right leg: on ground -->
      <line x1="50" y1="48" x2="60" y2="64" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="64" x2="62" y2="76" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms: pumping -->
      <line x1="50" y1="30" x2="38" y2="24" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="30" x2="62" y2="24" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    steps: ['原地站立，双脚与肩同宽','交替抬腿至大腿与地面平行','手臂配合摆动','保持节奏稳定','落地时前脚掌先着地'],
    tips: ['膝盖尽量抬高','上身保持直立不要后仰','核心收紧保持稳定'],
    sets: { easy: 3, standard: 4, hard: 5 },
    reps: { easy: 15, standard: 20, hard: 30 },
    rest: { easy: 30, standard: 30, hard: 45 }
  },

  jog: {
    name: '慢跑',
    category: 'run', tag: '跑步', tagClass: 'tag-run',
    target: '心肺 / 全身', equipment: '跑鞋',
    description: '中低强度有氧训练',
    animSvg: `<svg viewBox="0 0 100 100">
      <circle cx="52" cy="14" r="7" fill="#ff9500" opacity="0.85"/>
      <line x1="52" y1="21" x2="48" y2="46" stroke="#ff9500" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="48" y1="46" x2="36" y2="64" stroke="#ff9500" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="36;44;36" dur="0.8s" repeatCount="indefinite"/>
      </line>
      <line x1="48" y1="46" x2="60" y2="62" stroke="#ff9500" stroke-width="3" stroke-linecap="round">
        <animate attributeName="x2" values="60;52;60" dur="0.8s" repeatCount="indefinite"/>
      </line>
      <line x1="48" y1="32" x2="36" y2="26" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/>
      <line x1="48" y1="32" x2="62" y2="38" stroke="#ff9500" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    steps: ['热身步行2-3分钟后开始慢跑','保持能正常对话的速度','呼吸均匀用鼻子和嘴巴同时呼吸','手臂自然摆动步幅不要太大','结束前逐渐减速改为步行'],
    tips: ['跑前热身和跑后拉伸很重要','选择平坦的路面','穿有缓震的跑鞋保护膝盖'],
    sets: { easy: 1, standard: 1, hard: 2 },
    reps: { easy: 300, standard: 420, hard: 300 },
    rest: { easy: 0, standard: 0, hard: 60 },
    unit: '秒', isTimed: true
  }
};

// ===== Focus-based Plan Generator =====
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