const data = [
  {
    id: 261,
    name: { english: 'Poochyena', japanese: 'ポチエナ', chinese: '土狼犬', french: 'Medhyèna' },
    type: ['Dark'],
    base: { HP: 35, Attack: 55, Defense: 35, 'Sp. Attack': 30, 'Sp. Defense': 30, Speed: 35 }
  },
  {
    id: 74,
    name: { english: 'Geodude', japanese: 'イシツブテ', chinese: '小拳石', french: 'Racaillou' },
    type: ['Rock', 'Ground'],
    base: { HP: 40, Attack: 80, Defense: 100, 'Sp. Attack': 30, 'Sp. Defense': 30, Speed: 20 }
  },
  {
    id: 569,
    name: { english: 'Garbodor', japanese: 'ダストダス', chinese: '灰尘山', french: 'Miasmax' },
    type: ['Poison'],
    base: { HP: 80, Attack: 95, Defense: 82, 'Sp. Attack': 60, 'Sp. Defense': 82, Speed: 75 }
  },
  {
    id: 553,
    name: { english: 'Krookodile', japanese: 'ワルビアル', chinese: '流氓鳄', french: 'Crocorible' },
    type: ['Ground', 'Dark'],
    base: { HP: 95, Attack: 117, Defense: 80, 'Sp. Attack': 65, 'Sp. Defense': 70, Speed: 92 }
  },
  {
    id: 134,
    name: { english: 'Vaporeon', japanese: 'シャワーズ', chinese: '水伊布', french: 'Aquali' },
    type: ['Water'],
    base: { HP: 130, Attack: 65, Defense: 60, 'Sp. Attack': 110, 'Sp. Defense': 95, Speed: 65 }
  },
  {
    id: 260,
    name: { english: 'Swampert', japanese: 'ラグラージ', chinese: '巨沼怪', french: 'Laggron' },
    type: ['Water', 'Ground'],
    base: { HP: 100, Attack: 110, Defense: 90, 'Sp. Attack': 85, 'Sp. Defense': 90, Speed: 60 }
  },
  {
    id: 371,
    name: { english: 'Bagon', japanese: 'タツベイ', chinese: '宝贝龙', french: 'Draby' },
    type: ['Dragon'],
    base: { HP: 45, Attack: 75, Defense: 60, 'Sp. Attack': 40, 'Sp. Defense': 30, Speed: 50 }
  },
  {
    id: 636,
    name: { english: 'Larvesta', japanese: 'メラルバ', chinese: '燃烧虫', french: 'Pyronille' },
    type: ['Bug', 'Fire'],
    base: { HP: 55, Attack: 85, Defense: 55, 'Sp. Attack': 50, 'Sp. Defense': 55, Speed: 60 }
  },
  {
    id: 110,
    name: { english: 'Weezing', japanese: 'マタドガス', chinese: '双弹瓦斯', french: 'Smogogo' },
    type: ['Poison'],
    base: { HP: 65, Attack: 90, Defense: 120, 'Sp. Attack': 85, 'Sp. Defense': 70, Speed: 60 }
  },
  {
    id: 585,
    name: { english: 'Deerling', japanese: 'シキジカ', chinese: '四季鹿', french: 'Vivaldaim' },
    type: ['Normal', 'Grass'],
    base: { HP: 60, Attack: 60, Defense: 50, 'Sp. Attack': 40, 'Sp. Defense': 50, Speed: 75 }
  },
  {
    id: 740,
    name: { english: 'Crabominable', japanese: 'ケケンカニ', chinese: '好胜毛蟹', french: 'Crabominable' },
    type: ['Fighting', 'Ice'],
    base: { HP: 97, Attack: 132, Defense: 77, 'Sp. Attack': 62, 'Sp. Defense': 67, Speed: 43 }
  },
  {
    id: 628,
    name: { english: 'Braviary', japanese: 'ウォーグル', chinese: '勇士雄鹰', french: 'Gueriaigle' },
    type: ['Normal', 'Flying'],
    base: { HP: 100, Attack: 123, Defense: 75, 'Sp. Attack': 57, 'Sp. Defense': 75, Speed: 80 }
  },
  {
    id: 794,
    name: { english: 'Buzzwole', japanese: 'マッシブーン', chinese: '爆肌蚊', french: 'Cancrelove' },
    type: ['Bug', 'Fighting'],
    base: { HP: 107, Attack: 139, Defense: 139, 'Sp. Attack': 53, 'Sp. Defense': 53, Speed: 79 }
  },
  {
    id: 127,
    name: { english: 'Pinsir', japanese: 'カイロス', chinese: '凯罗斯', french: 'Scarabrute' },
    type: ['Bug'],
    base: { HP: 65, Attack: 125, Defense: 100, 'Sp. Attack': 55, 'Sp. Defense': 70, Speed: 85 }
  },
  {
    id: 662,
    name: { english: 'Fletchinder', japanese: 'ヒノヤコマ', chinese: '火箭雀', french: 'Braisillon' },
    type: ['Fire', 'Flying'],
    base: { HP: 62, Attack: 73, Defense: 55, 'Sp. Attack': 56, 'Sp. Defense': 52, Speed: 84 }
  },
  {
    id: 340,
    name: { english: 'Whiscash', japanese: 'ナマズン', chinese: '鲶鱼王', french: 'Barbicha' },
    type: ['Water', 'Ground'],
    base: { HP: 110, Attack: 78, Defense: 73, 'Sp. Attack': 76, 'Sp. Defense': 71, Speed: 60 }
  },
  {
    id: 788,
    name: { english: 'Tapu Fini', japanese: 'カプ・レヒレ', chinese: '卡璞・鳍鳍', french: 'Cosmog' },
    type: ['Water', 'Fairy'],
    base: { HP: 70, Attack: 75, Defense: 115, 'Sp. Attack': 95, 'Sp. Defense': 130, Speed: 85 }
  },
  {
    id: 739,
    name: { english: 'Crabrawler', japanese: 'マケンカニ', chinese: '好胜蟹', french: 'Crabagarre' },
    type: ['Fighting'],
    base: { HP: 47, Attack: 82, Defense: 57, 'Sp. Attack': 42, 'Sp. Defense': 47, Speed: 63 }
  }
];

export const test = {
  title: "Test list",
  data,
  loading: false,
};
