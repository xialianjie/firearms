export interface GunMod {
  id: string;
  name: string;
  author: string;
  createDate: string;
  category: string;
  content: string;
  attachments: string[];
}


export const mockGunMods: GunMod[] = [
  {
    id: "1",
    name: "突击步枪",
    author: "千屿",
    createDate: "2025-07-01",
    category: "步枪",
    content: `
KC17配置：
- 丐版：KC17突击步枪-烽火地带-6GPF42O0FIH98IS93CCNM
- 半改：KC17突击步枪-烽火地带-6GPF4100FIH98IS93CCNM
- 49万：KC17突击步枪-烽火地带-6GPFEHS00B59RBKSKV84B

K437配置：
- 30万：K437突击步枪-烽火地带-6GPFMAO00B59RBKSKV84B
- 48万：K437突击步枪-烽火地带-6GPFMD800B59RBKSKV84B
- 71万：K437突击步枪-烽火地带-6GPFMGC00B59RBKSKV84B
- K437丐版-6GSB4B8049H3TLFDHMKHO
- K437半改1--6GSB4H0049H3TLFDHMKHO
- K437半改2（可打倍镜）-6GSB4N4049H3TLFDHMKHO
- K437半改3加强版（可打倍镜）-6GSB4RS049H3TLFDHMKHO

腾龙配置：
- 16w:腾龙突击步枪-烽火地带-6GQEB8S03EINQ63AGU05N
- 27万：腾龙突击步枪-烽火地带-6GPFBCK0FIH98IS93CCNM
- 40万：腾龙暗杀流第一版（均衡）-6GR05EC0EU90O684D8QL5
- 60万：腾龙暗杀流第二版（压枪难度低）-6GR05JO0EU90O684D8QL5
- 80万：腾龙暗杀流第三版（45发大弹匣）-6GR05O80EU90O684D8QL5
- S5腾龙兵锋均衡改法-6GPDI44049H3TLFDHMKHO
- S5腾龙兵锋大弹匣改法-6GPMPUS049H3TLFDHMKHO

AUG配置：
- AUG性价比暗杀型22万-6GRB9KO0EU90O684D8QL5
- AUG暗杀流第一版（均衡）-6GR05EC0EU90O684D8QL5

G3战斗步枪配置：
- G3战斗步枪-烽火地带-6GP0NI00DA2OF906BNTEM

AKM配置：
- AKM先进后坐标准版-6GQBM280BAC7RIM3B0293
- AKM先进后坐低改版-6GQBM700BAC7RIM3B0293
- AKM先进后坐倍镜版-6GQBMCG0BAC7RIM3B0293
- 13万超性价比改法（加个镭射手感更好）AKM突击步枪-烽火地带-6FQD4QC0B3NT80JEK12E
- 22万满改属性版
AKM突击步枪-烽火地带-6FQD50O0B3NT80JEK12E8
- 26万倍镜版（枪托换UR更强）
AKM突击步枪-烽火地带-6FQD56O0B3NT80JEK12E8

巨浪配置：
- 25万：AS Val突击步枪-烽火地带-6GPFFB00FIH98IS93CCNM 
- 31万：AS Val突击步枪-烽火地带-6GPFF440FIH98IS93CCNM
- 53万：AS Val突击步枪-烽火地带-6GPFETC0FIH98IS93CCNM
- 65万：AS Val突击步枪-烽火地带-6GPFMUO00B59RBKSKV84B

SCAR-H配置：
- 23万：SCAR-H战斗步枪-烽火地带-6GPFL7G0FIH98IS93CCNM 
- 49万：SCAR-H战斗步枪-烽火地带-6GPFLV80FIH98IS93CCNM 

AK-12配置：
- 19万：AK-12突击步枪-烽火地带-6GPFK1C0FIH98IS93CCNM 
- 49万：AK-12突击步枪-烽火地带-6GPFKH80FIH98IS93CCNM 
- AK-12基础版（带镭射）-6GRMAOG049H3TLFDHMKHO
- AK-12标准版-6GRMASG049H3TLFDHMKHO

M7配置：
- M7半改稳定版：6GS0ELG049H3TLFDHMKHO
- M7半改机动版：6GS0EP4049H3TLFDHMKHO
- 38万：M7战斗步枪-烽火地带-6GPF6IS0FIH98IS93CCNM 
- 52万：M7战斗步枪-烽火地带-6GPF65G0FIH98IS93CCNM 

ASH-12配置：
- ASh-12战斗步枪-烽火地带-6GPFTQO00B59RBKSKV84B

M4A1配置：
- 18万：M4A1突击步枪-烽火地带-6GPFIJC0FIH98IS93CCNM 
- 33万：M4A1突击步枪-烽火地带-6GPFJJ00FIH98IS93CCNM 

K416配置：
- 26万：K416突击步枪-烽火地带-6GPF8IG0FIH98IS93CCNM 
- 44万：K416突击步枪-烽火地带-6GPFA180FIH98IS93CCNM 
- 54万：K416突击步枪-烽火地带-6GPF9DC0FIH98IS93CCNM
- K416满改红点版-6GT0HKK049H3TLFDHMKHO
- K416满改倍镜版-6GT0HC0049H3TLFDHMKHO
- K416满改骨架版-6GT0I0G049H3TLFDHMKHO

QBZ配置：
- 11W	丐版:	QBZ95-1突击步枪-烽火地带-6G94B100FHI6PKF6C3P0U
- 27w	性价比:	QBZ95-1突击步枪-烽火地带-6G94B1K0FHI6PKF6C3P0U
- 35w	三倍满改:	QBZ95-1突击步枪-烽火地带-6G94B280FHI6PKF6C3P0U
- 24w	红点性价比:	QBZ95-1突击步枪-烽火地带-6G94B300FHI6PKF6C3P0U
`.trim(),
    attachments: ["1"]
  },
  {
    id: "2",
    name: "冲锋枪",
    author: "千屿",
    createDate: "2025-07-03",
    category: "冲锋枪",
    content: `
SR-3M配置：
- 21万：SR-3M紧凑突击步枪-烽火地带-6GPFQM80FIH98IS93CCNM 
- 55万：SR-3M紧凑突击步枪-烽火地带-6GPFR5K0FIH98IS93CCNM 

P90配置：
- 23万：P90冲锋枪-烽火地带-6GPFRBO0FIH98IS93CCNM 
- 39万：P90冲锋枪-烽火地带-6GPFS0K0FIH98IS93CCNM 
- P90半改机动版-6GSLIUS0EU90O684D8QL5
- P90半改稳定版-6GSLIS40EU90O684D8QL5
- P90满改-6GSLJ480EU90O684D8QL5

QCQ171配置：
- 11万：QCQ171冲锋枪-烽火地带-6GPFOK00FIH98IS93CCNM 
- 32万：QCQ171冲锋枪-烽火地带-6GPFPGS0FIH98IS93CCNM

Vector配置：
- 17w	丐版:	Vector冲锋枪-烽火地带-6G93UUK08OPOB8QKQ72I8
- 47w	满改:	Vector冲锋枪-烽火地带-6G93UVG08OPOB8QKQ72I8
- 26w	性价比腰射:	Vector冲锋枪-烽火地带-6G93V0408OPOB8QKQ72I8
- 40w	大弹鼓腰射:	Vector冲锋枪-烽火地带-6G93V0S08OPOB8QKQ72I8

SMG45配置：
- 17w	性价比:	SMG-45冲锋枪-烽火地带-6G93V6808OPOB8QKQ72I8
- 36w	满改:	SMG-45冲锋枪-烽火地带-6G93V7008OPOB8QKQ72I8
- 30w	半改版:	SMG-45冲锋枪-烽火地带-6GPEA040CQ9J5LUV083F9
- 55w	满改37大玩具:	SMG-45冲锋枪-烽火地带-6GPEA100CQ9J5LUV083F9

MP5配置：
- MP5腰射版-6GG4H08049H3TLFDHMKHO
- MP5腰射暗杀版-6GG4H44049H3TLFDHMKHO

UZI配置：
- 10W	腰射:	UZI冲锋枪-烽火地带-6G93VJK08OPOB8QKQ72I8
- 10W	反制式:	UZI冲锋枪-烽火地带-6G93VK808OPOB8QKQ72I8

野牛配置：
- 10w	反制式：	野牛冲锋枪-烽火地带-6G93VNS08OPOB8QKQ72I8

勇士配置：
- 18w	腰射：	勇士冲锋枪-烽火地带-6G9478O08OPOB8QKQ72I8
- 16w	红点：	勇士冲锋枪-烽火地带-6G9479G08OPOB8QKQ72I8
- 22w	强化版：	勇士冲锋枪-烽火地带-6G947A408OPOB8QKQ72I8
`.trim(),
    
    attachments: ["2"]
  },
  {
    id: "3",
    name: "轻机枪",
    author: "千屿",
    createDate: "2025-06-28",
    category: "轻机枪",
    content: `
PKM配置：
- PKM超性价比版-6GL3GO0049H3TLFDHMKHO
- 57万 腰射 满配PKM通用机枪-烽火地带-6GQBEKC0C4PRBT1BGUG84
- 53万 长枪管 2倍 满配PKM通用机枪-烽火地带-6GQBELG0C4PRBT1BGUG84
- 35万 激光 消音 超稳 PKM通用机枪-烽火地带-6GQBEIO0C4PRBT1BGUG84
- 23万 激光 清晰镜 PKM通用机枪-烽火地带-6GQBEGG0C4PRBT1BGUG84
- 16万 PKM通用机枪-烽火地带-6GQBEEK0C4PRBT1BGUG84

QJB201配置：
- 41万：QJB201轻机枪-烽火地带-6GPFOJ400B59RBKSKV84B

M249配置：
- 15万：M249轻机枪-烽火地带-6GPFOU800B59RBKSKV84B
- 41万：M249轻机枪-烽火地带-6GPFP1O00B59RBKSKV84B
- 49万：M249轻机枪-烽火地带-6GPFPGC00B59RBKSKV84B
`.trim(),
    attachments: ["3"]
  },
  {
    id: "4",
    name: "射手步枪",
    author: "千屿",
    createDate: "2025-07-05",
    category: "射手步枪",
    content: `
PSG-12配置：
- 47万：PSG-1射手步枪-烽火地带-6GPFUKG00B59RBKSKV84B

SR-25:
- SR25速射压制流稳定版-6GQ16SK0EU90O684D8QL5
- SR25速射压制流机动版-6GQ16PK0EU90O684D8QL5
- SR25常规暗杀版-6GQ173S0EU90O684D8QL5

M14配置：
- 72万：M14射手步枪-烽火地带-6GPFDU800B59RBKSKV84B
- 54万：M14射手步枪-烽火地带-6GPF55S0FIH98IS93CCNM

SVD配置：
- 31万：SVD狙击步枪-烽火地带-6GPFVE000B59RBKSKV84B

VSS配置：
- 40万：VSS射手步枪-烽火地带-6GPFVGG00B59RBKSKV84B

Mini-14配置：
- 21万：Mini-14射手步枪-烽火地带-6GPFVI000B59RBKSKV84B
`.trim(),
    attachments: ["4"]
  },
  {
    id: "5",
    name: "手枪",
    author: "千屿",
    createDate: "2025-06-30",
    category: "冲锋枪",
    content: `
G18配置：
- G18-烽火地带-6G941RG08OPOB8QKQ72I8

左轮配置：
- 22w	左轮狙：.357左轮-烽火地带-6G9423S08OPOB8QKQ72I8
`.trim(),
    attachments: ["5"]
  },

  {
    id: "6",
    name: "霰弹枪",
    author: "千屿",
    createDate: "2025-06-30",
    category: "霰弹枪",
    content: `
M870配置：
- 狙击版：M870霰弹枪-烽火地带-6GPEADG0CQ9J5LUV083F9
- 丐版：M870霰弹枪-烽火地带-6GPEAE80CQ9J5LUV083F9

S12K配置：
- S12K霰弹枪-烽火地带-6G940BK08OPOB8QKQ72I8
- S12K霰弹枪-烽火地带-6G940CC08OPOB8QKQ72I8
- S12K霰弹枪-烽火地带-6G940D008OPOB8QKQ72I8

`.trim(),
    attachments: ["6"]
  },

  {
    id: "7",
    name: "金枪客改枪码",
    author: "千屿",
    createDate: "2025-06-30",
    category: "金枪客",
    content: `
- 上交K437最省改法-6GPI5KK0EU90O684D8QL5
- 上交SCAR最省改法-6GPI60C0EU90O684D8QL5
- 上交ASH12最省改法-6GPI2GC0EU90O684D8QL5
`.trim(),
    attachments: ["7"]
  },

  {
    id: "8",
    name: "夜子军工",
    author: "夜子",
    createDate: "2025-06-30",
    category: "乱七八糟的枪",
    content: `
- K437突击步枪-烽火地带-6GRI1EG06HO978FAEC0L4(满改红点)      
- 腾龙突击步枪-烽火地带-6GRI1MK06HO978FAEC0L4（满改红点）              
- SCAR-H战斗步枪-烽火地带-6GPSQB806HO978FAEC0L4（倍镜性价比scar）
- K416突击步枪-烽火地带-6GRI20K06HO978FAEC0L4（性价比）    
- K416突击步枪-烽火地带-6GRI2A806HO978FAEC0L4（满改（红点可以换倍镜）） 
- SR-3M紧凑突击步枪-烽火地带-6GRI2FS06HO978FAEC0L4（性价比腰射可开镜）                        
`.trim(),
    attachments: ["8"]
  },
];