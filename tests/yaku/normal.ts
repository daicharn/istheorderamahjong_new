import { MeldSpec, TehaiCase } from '../testConsts';
import { MeldType } from "../../modules/MahjongConsts";

export const casesNormal: TehaiCase[] = [
  {
    name: "chinitsu_1",
    desc: "清一色",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,2,2,2,3,4,5,6,7,8,9,9],
    expected: new Map([[0, new Map([["清一色", 6]])]])
  },
  {
    name: "chinitsu_2",
    desc: "清一色",
    agariHai: 2,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.CHI},
        {hai: 8, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [2,3,4,5,5,5,6,6],
    expected: new Map([[0, new Map([["清一色", 5]])]])
  },
  {
    name: "chinitsu_3",
    desc: "清一色",
    agariHai: 1,
    isTsumo: true,
    melds: [
        {hai: 8, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [1,2,2,3,3,4,5,5,5,6,6],
    expected: new Map([[0, new Map([["清一色", 6]])]])
  },
  {
    name: "honitsu_1",
    desc: "混一色",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,2,2,2,3,4,5,6,7,8,28,28],
    expected: new Map([[0, new Map([["混一色", 3]])]])
  },
  {
    name: "honitsu_2",
    desc: "混一色",
    agariHai: 28,
    isTsumo: true,
    melds: [
        {hai: 10, type: MeldType.CHI},
        {hai: 15, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [28,28,28,29,29,29,30,30],
    expected: new Map([[0, new Map([["混一色", 2]])]])
  },
  {
    name: "honitsu_3",
    desc: "混一色",
    agariHai: 28,
    isTsumo: true,
    melds: [
        {hai: 19, type: MeldType.CHI},
        {hai: 22, type: MeldType.CHI},
        {hai: 25, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [19,19,28,28,28],
    expected: new Map([[0, new Map([["混一色", 2]])]])
  },
  {
    name: "junchan_1",
    desc: "純全帯么九",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,9,9,9,10,11,12,16,17,18,27,27],
    expected: new Map([[0, new Map([["純全帯么九", 3]])]])
  },
  {
    name: "junchan_2",
    desc: "純全帯么九",
    agariHai: 9,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.CHI},
        {hai: 10, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [9,9,9,18,18,18,27,27],
    expected: new Map([[0, new Map([["純全帯么九", 2]])]])
  },
  {
    name: "honchan_1",
    desc: "混全帯么九",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,9,9,9,10,11,12,28,28,28,29,29],
    expected: new Map([[0, new Map([["混全帯么九", 2]])]])
  },
  {
    name: "honchan_2",
    desc: "混全帯么九",
    agariHai: 28,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.CHI},
        {hai: 9, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [25,26,27,29,29,29,30,30],
    expected: new Map([[0, new Map([["混全帯么九", 1]])]])
  },
  {
    name: "Honroto_1",
    desc: "混老頭",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,10,10,10,19,19,19,29,29,29,30,30],
    expected: new Map([[0, new Map([["混老頭", 2]])]])
  },
  {
    name: "Honroto_2",
    desc: "混老頭",
    agariHai: 31,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.PON},
        {hai: 9, type: MeldType.PON},
        {hai: 30, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [10,10,31,31,31],
    expected: new Map([[0, new Map([["混老頭", 2]])]])
  },
  {
    name: "Honroto_3",
    desc: "混老頭",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.PON},
        {hai: 10, type: MeldType.PON},
        {hai: 30, type: MeldType.MINKAN},
        {hai: 31, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [29,29],
    expected: new Map([[0, new Map([["混老頭", 2]])]])
  }
];