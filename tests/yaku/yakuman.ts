import { MeldSpec, TehaiCase } from '../testConsts';
import { MeldType, WinEvent } from "../../modules/MahjongConsts";

export const casesYakuman: TehaiCase<Map<number, Map<string, number>>>[] = [
  {
    name: "tsuiso_1",
    desc: "字一色",
    agariHai: 29,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [28,28,29,29,29,31,31,31,32,32,32,34,34,34],
    expected: new Map([[0, new Map([["字一色", 0]])]])
  },
  {
    name: "tsuiso_2",
    desc: "字一色",
    agariHai: 29,
    isTsumo: true,
    melds: [
        {hai: 32, type: MeldType.PON},
        {hai: 34, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [28,28,29,29,29,31,31,31],
    expected: new Map([[0, new Map([["字一色", 0]])]])
  },
  {
    name: "tsuiso_3",
    desc: "字一色",
    agariHai: 29,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [28,28,29,29,30,30,31,31,32,32,33,33,34,34],
    expected: new Map([[0, new Map([["字一色", 0]])]])
  },
  {
    name: "chinroto_1",
    desc: "清老頭",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,9,9,9,10,10,18,18,18,27,27,27],
    expected: new Map([[0, new Map([["清老頭", 0]])]])
  },
  {
    name: "chinroto_2",
    desc: "清老頭",
    agariHai: 10,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.PON},
        {hai: 19, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [9,9,9,10,10,18,18,18],
    expected: new Map([[0, new Map([["清老頭", 0]])]])
  },
  {
    name: "ryuiso_1",
    desc: "緑一色",
    agariHai: 21,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [20,20,21,21,22,22,24,24,24,26,26,26,33,33],
    expected: new Map([[0, new Map([["緑一色", 0]])]])
  },
  {
    name: "ryuiso_2",
    desc: "緑一色",
    agariHai: 26,
    isTsumo: true,
    melds: [
        {hai: 20, type: MeldType.CHI},
        {hai: 33, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [20,21,22,24,24,24,26,26],
    expected: new Map([[0, new Map([["緑一色", 0]])]])
  },
  {
    name: "daisushi_1",
    desc: "大四喜",
    agariHai: 30,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,28,28,28,29,29,29,30,30,30,31,31,31],
    expected: new Map([[0, new Map([["大四喜", 0]])]])
  },
  {
    name: "daisushi_2",
    desc: "大四喜",
    agariHai: 30,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [28,28,28,29,29,29,30,30,30,31,31,31,33,33],
    expected: new Map([[0, new Map([["四暗刻", 0],["字一色", 0],["大四喜", 0]])]])
  },
  {
    name: "daisushi_3",
    desc: "大四喜",
    agariHai: 30,
    isTsumo: true,
    melds: [
        {hai: 29, type: MeldType.PON},
        {hai: 31, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [26,26,28,28,28,30,30,30],
    expected: new Map([[0, new Map([["大四喜", 0]])]])
  },
  {
    name: "shosushi_1",
    desc: "小四喜",
    agariHai: 30,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,28,28,28,29,29,30,30,30,31,31,31],
    expected: new Map([[0, new Map([["小四喜", 0]])]])
  },
  {
    name: "shosushi_2",
    desc: "小四喜",
    agariHai: 28,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [28,28,28,29,29,29,30,30,31,31,31,33,33,33],
    expected: new Map([[0, new Map([["字一色", 0],["小四喜", 0],["四暗刻", 0]])]])
  },
  {
    name: "shosushi_3",
    desc: "小四喜",
    agariHai: 28,
    isTsumo: true,
    melds: [
        {hai: 29, type: MeldType.PON},
        {hai: 31, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [25,26,27,28,28,30,30,30],
    expected: new Map([[0, new Map([["小四喜", 0]])]])
  },
  {
    name: "suanko_1",
    desc: "四暗刻",
    agariHai: 3,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [3,3,3,7,7,7,12,12,12,24,24,24,31,31],
    expected: new Map([[0, new Map([["四暗刻", 0]])]])
  },
  {
    name: "suanko_2",
    desc: "四暗刻",
    agariHai: 3,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [3,3,3,7,7,7,12,12,12,24,24,24,31,31],
    expected: new Map([[0, new Map([["三暗刻", 2], ["対々和", 2]])]])
  },
  {
    name: "suanko_3",
    desc: "四暗刻",
    agariHai: 31,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [3,3,3,7,7,7,12,12,12,24,24,24,31,31],
    expected: new Map([[0, new Map([["四暗刻単騎", 0]])]])
  },
  {
    name: "suanko_4",
    desc: "四暗刻",
    agariHai: 31,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [3,3,3,7,7,7,12,12,12,24,24,24,31,31],
    expected: new Map([[0, new Map([["四暗刻単騎", 0]])]])
  },
  {
    name: "suanko_5",
    desc: "四暗刻",
    agariHai: 7,
    isTsumo: true,
    melds: [
        {hai: 12, type: MeldType.ANKAN},
        {hai: 24, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [3,3,3,7,7,7,31,31],
    expected: new Map([[0, new Map([["四暗刻", 0]])]])
  },
  {
    name: "daisangen_1",
    desc: "大三元",
    agariHai: 33,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,28,28,28,32,32,32,33,33,33,34,34,34],
    expected: new Map([[0, new Map([["大三元", 0]])]])
  },
  {
    name: "daisangen_2",
    desc: "大三元",
    agariHai: 33,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [28,28,29,29,29,32,32,32,33,33,33,34,34,34],
    expected: new Map([[0, new Map([["大三元", 0],["字一色", 0],["四暗刻", 0]])]])
  },
  {
    name: "daisangen_3",
    desc: "大三元",
    agariHai: 34,
    isTsumo: false,
    melds: [
        {hai: 32, type: MeldType.PON},
        {hai: 33, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [1,1,28,28,28,34,34,34],
    expected: new Map([[0, new Map([["大三元", 0]])]])
  },
  {
    name: "kokushi_1",
    desc: "国士無双",
    agariHai: 9,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,1,9,10,18,19,27,28,29,30,31,32,33,34],
    expected: new Map([[0, new Map([["国士無双", 0]])]])
  },
  {
    name: "kokushi_2",
    desc: "国士無双",
    agariHai: 18,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,9,10,18,19,27,28,29,30,31,32,33,34,34],
    expected: new Map([[0, new Map([["国士無双", 0]])]])
  },
  {
    name: "kokushi_3",
    desc: "国士無双",
    agariHai: 28,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,9,10,18,19,27,28,28,29,30,31,32,33,34],
    expected: new Map([[0, new Map([["国士無双13面待ち", 0]])]])
  },
  {
    name: "churen_1",
    desc: "九蓮宝燈",
    agariHai: 9,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,2,3,4,5,5,6,7,8,9,9,9],
    expected: new Map([[0, new Map([["九蓮宝燈", 0]])]])
  },
  {
    name: "churen_2",
    desc: "九蓮宝燈",
    agariHai: 18,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [10,10,10,10,11,12,13,14,15,16,17,18,18,18],
    expected: new Map([[0, new Map([["九蓮宝燈", 0]])]])
  },
  {
    name: "churen_3",
    desc: "九蓮宝燈",
    agariHai: 22,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [19,19,19,20,21,22,23,24,25,26,26,27,27,27],
    expected: new Map([[0, new Map([["九蓮宝燈", 0]])]])
  },
  {
    name: "churen_4",
    desc: "九蓮宝燈",
    agariHai: 9,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [2,3,4,5,5],
    expected: new Map()
  },
  {
    name: "churen_5",
    desc: "九蓮宝燈",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,1,2,3,4,5,6,7,8,9,9,9],
    expected: new Map([[0, new Map([["純正九蓮宝燈", 0]])]])
  },
  {
    name: "churen_6",
    desc: "九蓮宝燈",
    agariHai: 5,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,2,3,4,5,5,6,7,8,9,9,9],
    expected: new Map([[0, new Map([["純正九蓮宝燈", 0]])]])
  },
  {
    name: "churen_7",
    desc: "九蓮宝燈",
    agariHai: 9,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,2,3,4,5,6,7,8,9,9,9,9],
    expected: new Map([[0, new Map([["純正九蓮宝燈", 0]])]])
  },
  {
    name: "sukantsu_1",
    desc: "四槓子",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 2, type: MeldType.ANKAN},
        {hai: 13, type: MeldType.ANKAN},
        {hai: 16, type: MeldType.MINKAN},
        {hai: 31, type: MeldType.MINKAN},
    ] as MeldSpec[],
    hais: [1,1],
    expected: new Map([[0, new Map([["四槓子", 0]])]])
  },
  {
    name: "sukantsu_2",
    desc: "四槓子",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 2, type: MeldType.ANKAN},
        {hai: 13, type: MeldType.ANKAN},
        {hai: 16, type: MeldType.ANKAN},
        {hai: 31, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [1,1],
    expected: new Map([[0, new Map([["四槓子", 0],["四暗刻単騎", 0]])]])
  },
  {
    name: "sukantsu_3",
    desc: "四槓子",
    agariHai: 32,
    isTsumo: false,
    melds: [
        {hai: 28, type: MeldType.ANKAN},
        {hai: 29, type: MeldType.ANKAN},
        {hai: 30, type: MeldType.ANKAN},
        {hai: 31, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [32,32],
    expected: new Map([[0, new Map([["大四喜", 0],["字一色", 0],["四槓子", 0],["四暗刻単騎", 0]])]])
  },
  {
    name: "tenho_1",
    desc: "天和",
    agariHai: 1,
    isTsumo: true,
    event: WinEvent.TENHO,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: new Map([[0, new Map([["天和", 0]])]])
  },
  {
    name: "chiho_1",
    desc: "地和",
    agariHai: 1,
    isTsumo: true,
    event: WinEvent.CHIHO,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
    expected: new Map([[0, new Map([["地和", 0]])]])
  },
];