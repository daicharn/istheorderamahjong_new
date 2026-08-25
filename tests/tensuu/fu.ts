import { FuSpec, MeldSpec, TehaiCase } from '../testConsts';
import { BlockType, MeldType, WinEvent } from "../../modules/MahjongConsts";
import { TILE } from "../../modules/tileDefs"
import { Meld } from '../../modules/Meld';
import { BlockHais } from '../../modules/BlockHais';

export const caseFu: TehaiCase<FuSpec[][]>[] = [
  {
    name: "pinfu_tumo",
    desc: "平和",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: [
      [{name: "平和ツモ", fu: 20}]
    ] as FuSpec[][]
  },
  {
    name: "pinfu_ron",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: [
      [{name: "符底", fu: 20},{name: "面前ロン", fu: 10},]
    ] as FuSpec[][]
  },
  {
    name: "chitoi",
    desc: "七対子",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,1,3,3,9,9,13,13,16,16,22,22,31,31],
    expected: [
      [{name: "七対子", fu: 25}]
    ] as FuSpec[][]
  },
  {
    name: "machi_tanki",
    desc: "待ちの形",
    agariHai: 13,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, {name: "単騎待ち", fu: 2}]
    ] as FuSpec[][]
  },
  {
    name: "machi_penchan",
    desc: "待ちの形",
    agariHai: 3,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, {name: "辺張待ち", fu: 2}]
    ] as FuSpec[][]
  },
  {
    name: "machi_kanchan",
    desc: "待ちの形",
    agariHai: 2,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, {name: "嵌張待ち", fu: 2}]
    ] as FuSpec[][]
  },
  {
    name: "machi_shanpon",
    desc: "待ちの形",
    agariHai: 10,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,10,10,13,13],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "么九牌暗刻", fu: 8, mentsu: BlockHais.from(10, BlockType.KOTSU)}]
    ] as FuSpec[][]
  },
  {
    name: "yakuhai_haku",
    desc: "役牌雀頭",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,32,32],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "役牌雀頭", fu: 2, mentsu: BlockHais.from(32, BlockType.JANTO)}]
    ] as FuSpec[][]
  },
  {
    name: "yakuhai_hatsu",
    desc: "役牌雀頭",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,33,33],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "役牌雀頭", fu: 2, mentsu: BlockHais.from(33, BlockType.JANTO)}]
    ] as FuSpec[][]
  },
  {
    name: "yakuhai_chun",
    desc: "役牌雀頭",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,34,34],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "役牌雀頭", fu: 2, mentsu: BlockHais.from(34, BlockType.JANTO)}]
    ] as FuSpec[][]
  },
  {
    name: "yakuhai_jifuu",
    desc: "役牌雀頭",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,28,28],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.SOUTH,
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "役牌雀頭", fu: 2, mentsu: BlockHais.from(28, BlockType.JANTO)}]
    ] as FuSpec[][]
  },
  {
    name: "yakuhai_bafuu",
    desc: "役牌雀頭",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,29,29],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.SOUTH,
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "役牌雀頭", fu: 2, mentsu: BlockHais.from(29, BlockType.JANTO)}]
    ] as FuSpec[][]
  },
  {
    name: "yakuhai_renpuu",
    desc: "役牌雀頭",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,28,28],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.EAST,
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "役牌雀頭", fu: 2, mentsu: BlockHais.from(28, BlockType.JANTO)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_chuchan_minko",
    desc: "面子",
    agariHai: 3,
    isTsumo: true,
    melds: [
      {hai: 2, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "中張牌明刻", fu: 2, mentsu: Meld.from(2, MeldType.PON)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_yaochu_minko",
    desc: "面子",
    agariHai: 3,
    isTsumo: true,
    melds: [
      {hai: 1, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "么九牌明刻", fu: 4, mentsu: Meld.from(1, MeldType.PON)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_chuchan_anko",
    desc: "面子",
    agariHai: 2,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [2,2,2,3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "中張牌暗刻", fu: 4, mentsu: BlockHais.from(2, BlockType.KOTSU)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_yaochu_anko",
    desc: "面子",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,1,1,3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "么九牌暗刻", fu: 8, mentsu: BlockHais.from(1, BlockType.KOTSU)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_chuchan_minkan",
    desc: "面子",
    agariHai: 3,
    isTsumo: true,
    melds: [
      {hai: 2, type: MeldType.MINKAN},
    ] as MeldSpec[],
    hais: [3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "中張牌明槓", fu: 8, mentsu: Meld.from(2, MeldType.MINKAN)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_yaochu_minkan",
    desc: "面子",
    agariHai: 3,
    isTsumo: true,
    melds: [
      {hai: 1, type: MeldType.MINKAN},
    ] as MeldSpec[],
    hais: [3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "么九牌明槓", fu: 16, mentsu: Meld.from(1, MeldType.MINKAN)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_chuchan_ankan",
    desc: "面子",
    agariHai: 3,
    isTsumo: true,
    melds: [
      {hai: 2, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "中張牌暗槓", fu: 16, mentsu: Meld.from(2, MeldType.ANKAN)}]
    ] as FuSpec[][]
  },
  {
    name: "mentsu_yaochu_ankan",
    desc: "面子",
    agariHai: 3,
    isTsumo: true,
    melds: [
      {hai: 1, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [3,4,5,6,6,7,7,8,8,10,10],
    expected: [
      [{name: "符底", fu: 20}, {name: "ツモ", fu: 2}, 
       {name: "么九牌暗槓", fu: 32, mentsu: Meld.from(1, MeldType.ANKAN)}]
    ] as FuSpec[][]
  },
];