import { Score, MeldSpec, TehaiCase } from '../testConsts';
import { MeldType, WinEvent } from "../../modules/MahjongConsts";

export const casesScore: TehaiCase<Score[]>[] = [
  {
    name: "pinfu_1",
    desc: "平和",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,7,8,9,10,11,12,13,13],
    expected: [
      {han: 2, fuBasic: 20, fuCeiled: 20}
    ]
  },
  {
    name: "toitoi_1",
    desc: "対々和",
    agariHai: 14,
    isTsumo: true,
    melds: [
      {hai: 1, type: MeldType.PON},
      {hai: 8, type: MeldType.PON},
      {hai: 29, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [14,14,14,16,16],
    expected: [
      {han: 2, fuBasic: 36, fuCeiled: 40}
    ]
  },
  {
    name: "sankantsu_1",
    desc: "三槓子",
    agariHai: 14,
    isTsumo: true,
    melds: [
      {hai: 1, type: MeldType.ANKAN},
      {hai: 8, type: MeldType.ANKAN},
      {hai: 29, type: MeldType.MINKAN},
    ] as MeldSpec[],
    hais: [14,15,16,18,18],
    expected: [
      {han: 2, fuBasic: 86, fuCeiled: 90}
    ]
  },
];