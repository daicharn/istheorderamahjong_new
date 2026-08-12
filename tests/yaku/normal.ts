import { MeldSpec, TehaiCase } from '../testConsts';
import { MeldType, WinEvent } from "../../modules/MahjongConsts";
import { TILE } from "../../modules/tileDefs"

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
    isTsumo: false,
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
    hais: [29,29,29,30,30,30,31,31],
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
    hais: [19,19,29,29,29],
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
    hais: [1,1,1,9,9,9,10,11,12,29,29,29,30,30],
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
    name: "honroto_1",
    desc: "混老頭",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,10,10,10,19,19,19,29,29,29,30,30],
    expected: new Map([[0, new Map([["混老頭", 2],["三暗刻", 2], ["対々和", 2],["三色同刻", 2]])]])
  },
  {
    name: "honroto_2",
    desc: "混老頭",
    agariHai: 31,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.PON},
        {hai: 9, type: MeldType.PON},
        {hai: 30, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [10,10,31,31,31],
    expected: new Map([[0, new Map([["混老頭", 2],["対々和", 2]])]])
  },
  {
    name: "honroto_3",
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
    expected: new Map([[0, new Map([["混老頭", 2],["対々和", 2]])]])
  },
  {
    name: "ryanpeko_1",
    desc: "二盃口",
    agariHai: 2,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,2,2,3,3,12,12,13,13,14,14,17,17],
    expected: new Map([[0, new Map([["二盃口", 3]])],[1, new Map([["七対子", 2]])]])
  },
  {
    name: "ryanpeko_2",
    desc: "二盃口",
    agariHai: 11,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,1,2,2,2,2,3,3,3,3,11,11],
    expected: new Map([[0, new Map([["三暗刻", 2]])],[1, new Map([["二盃口", 3]])]])
  },
  {
    name: "ryanpeko_3",
    desc: "二盃口",
    agariHai: 2,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,2,2,3,3,4,4,5,5,6,6,7,7],
    expected: new Map([[0, new Map([["清一色", 6],["二盃口", 3],["平和", 1]])],
      [1, new Map([["清一色", 6],["二盃口", 3]])],
      [2, new Map([["清一色", 6],["二盃口", 3]])],
      [3, new Map([["清一色", 6],["七対子", 2]])]
    ])
  },
  {
    name: "ryanpeko_4",
    desc: "二盃口",
    agariHai: 3,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,1,1,1,2,2,2,2,3,3,3,3,4,4],
    expected: new Map([[0, new Map([["清一色", 6],["二盃口", 3],["門前清自摸和", 1]])],
      [1, new Map([["清一色", 6],["三暗刻", 2],["門前清自摸和", 1]])],
      [2, new Map([["清一色", 6],["二盃口", 3],["門前清自摸和", 1]])],
    ])
  },
  {
    name: "chitoitsu_1",
    desc: "七対子",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,5,5,11,11,17,17,21,21,28,28,31,31],
    expected: new Map([[0, new Map([["七対子", 2]])]])
  },
  {
    name: "chitoitsu_2",
    desc: "七対子",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,2,2,3,3,4,4,5,5,28,28,31,31],
    expected: new Map([[0, new Map([["混一色", 3],["七対子", 2]])]])
  },
  {
    name: "chitoitsu_3",
    desc: "七対子",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,2,2,4,4,5,5,6,6,8,8,9,9],
    expected: new Map([[0, new Map([["清一色", 6],["七対子", 2]])]])
  },
  {
    name: "chitoitsu_4",
    desc: "七対子",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,9,9,18,18,27,27,28,28,29,29,32,32],
    expected: new Map([[0, new Map([["混老頭", 2],["七対子", 2]])]])
  },
  {
    name: "sananko_1",
    desc: "三暗刻",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,1,1,5,5,5,12,12,12,16,17,18,28,28],
    expected: new Map([[0, new Map([["三暗刻", 2],["門前清自摸和", 1]])]])
  },
  {
    name: "sananko_2",
    desc: "三暗刻",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,5,5,5,12,12,12,16,16,16,28,28],
    expected: new Map([[0, new Map([["三暗刻", 2],["対々和", 2]])]])
  },
  {
    name: "sananko_3",
    desc: "三暗刻",
    agariHai: 5,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.PON}
    ] as MeldSpec[],
    hais: [5,5,5,12,12,12,16,16,16,28,28],
    expected: new Map([[0, new Map([["三暗刻", 2],["対々和", 2]])]])
  },
  {
    name: "sananko_4",
    desc: "三暗刻",
    agariHai: 1,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.ANKAN},
        {hai: 5, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [12,13,14,16,16,16,28,28],
    expected: new Map([[0, new Map([["三暗刻", 2],["門前清自摸和", 1]])]])
  },
  {
    name: "toitoi_1",
    desc: "対々和",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 4, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [1,1,1,5,5,5,12,12,12,28,28],
    expected: new Map([[0, new Map([["対々和", 2]])]])
  },
  {
    name: "toitoi_2",
    desc: "対々和",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 4, type: MeldType.PON},
        {hai: 5, type: MeldType.PON},
        {hai: 12, type: MeldType.PON},
        {hai: 29, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [1,1],
    expected: new Map([[0, new Map([["対々和", 2]])]])
  },
  {
    name: "iipeko_1",
    desc: "一盃口",
    agariHai: 3,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,2,2,3,3,12,13,13,14,14,15,17,17],
    expected: new Map([[0, new Map([["一盃口", 1]])]])
  },
  {
    name: "iipeko_2",
    desc: "一盃口",
    agariHai: 2,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [2,2,3,3,4,4,5,5,5,6,6,6,9,9],
    expected: new Map([[0, new Map([["清一色", 6],["一盃口", 1]])]])
  },
  {
    name: "iipeko_3",
    desc: "一盃口",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 4, type: MeldType.CHI},
        {hai: 5, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [2,2,3,3,4,4,6,6],
    expected: new Map([[0, new Map([["清一色", 5]])]])
  },
  {
    name: "shosangen_1",
    desc: "小三元",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 32, type: MeldType.PON},
        {hai: 33, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [34,34,1,1,1,12,13,14],
    expected: new Map([[0, new Map([["小三元", 2],["白", 1],["發", 1]])]])
  },
  {
    name: "shosangen_2",
    desc: "小三元",
    agariHai: 34,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [32,32,33,33,33,34,34,34,1,1,1,9,9,9],
    expected: new Map([[0, new Map([["混一色", 3],["混老頭", 2],["三暗刻", 2],["対々和", 2],["小三元", 2],["發", 1],["中", 1]])]])
  },
  {
    name: "sanshoku_1",
    desc: "三色同順",
    agariHai: 2,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,10,11,12,19,19,20,20,21,21,23,23],
    expected: new Map([[0, new Map([["三色同順", 2],["一盃口", 1]])]])
  },
  {
    name: "sanshoku_2",
    desc: "三色同順",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 2, type: MeldType.CHI},
        {hai: 11, type: MeldType.CHI},
        {hai: 20, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [2,3,4,23,23],
    expected: new Map([[0, new Map([["三色同順", 1]])]])
  },
  {
    name: "sanshoku_3",
    desc: "三色同順",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 7, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [16,17,18,25,26,27,28,28,32,32,32],
    expected: new Map([[0, new Map([["三色同順", 1],["混全帯么九", 1],["白", 1]])]])
  },
  {
    name: "sanshoku_4",
    desc: "三色同順",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,10,11,12,19,20,21,26,26,29,29,29],
    expected: new Map([[0, new Map([["三色同順", 2]])]])
  },
  {
    name: "doukou_1",
    desc: "三色同刻",
    agariHai: 2,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [2,2,2,11,11,11,20,20,20,22,23,24,29,29],
    expected: new Map([[0, new Map([["三色同刻", 2]])]])
  },
  {
    name: "doukou_2",
    desc: "三色同刻",
    agariHai: 2,
    isTsumo: false,
    melds: [
      {hai: 14, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [5,5,5,23,23,23,22,23,24,29,29],
    expected: new Map([[0, new Map([["三色同刻", 2]])]])
  },
  {
    name: "doukou_3",
    desc: "三色同刻",
    agariHai: 2,
    isTsumo: false,
    melds: [
      {hai: 9, type: MeldType.PON},
      {hai: 18, type: MeldType.PON},
      {hai: 27, type: MeldType.MINKAN},
    ] as MeldSpec[],
    hais: [23,24,25,29,29],
    expected: new Map([[0, new Map([["三色同刻", 2]])]])
  },
  {
    name: "ittsuu_1",
    desc: "一気通貫",
    agariHai: 14,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,7,8,9,14,14,14,23,23],
    expected: new Map([[0, new Map([["一気通貫", 2]])]])
  },
  {
    name: "ittsuu_2",
    desc: "一気通貫",
    agariHai: 20,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [10,11,12,13,14,15,16,17,18,20,20,20,23,23],
    expected: new Map([[0, new Map([["一気通貫", 2]])]])
  },
  {
    name: "ittsuu_3",
    desc: "一気通貫",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,1,1,19,20,21,22,23,24,25,26,27,29,29],
    expected: new Map([[0, new Map([["一気通貫", 2]])]])
  },
  {
    name: "ittsuu_4",
    desc: "一気通貫",
    agariHai: 1,
    isTsumo: false,
    melds: [
        {hai: 4, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [1,2,3,7,8,9,14,14,14,23,23],
    expected: new Map([[0, new Map([["一気通貫", 1]])]])
  },
  {
    name: "ittsuu_5",
    desc: "一気通貫",
    agariHai: 14,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.CHI},
        {hai: 7, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [4,5,6,14,14,14,23,23],
    expected: new Map([[0, new Map([["一気通貫", 1]])]])
  },
  {
    name: "ittsuu_6",
    desc: "一気通貫",
    agariHai: 14,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.CHI},
        {hai: 4, type: MeldType.CHI},
        {hai: 7, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [14,14,14,23,23],
    expected: new Map([[0, new Map([["一気通貫", 1]])]])
  },
  {
    name: "ittsuu_7",
    desc: "一気通貫",
    agariHai: 28,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.SOUTH,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,12,12,28,28,28,31,31,31,34,34,34],
    expected: new Map([[0, new Map([["中", 1]])]])
  },
  {
    name: "tanyao_1",
    desc: "断么九",
    agariHai: 14,
    isTsumo: false,
    kuitan: false,
    melds: [] as MeldSpec[],
    hais: [2,3,4,5,6,7,12,12,12,21,21,24,25,26],
    expected: new Map([[0, new Map([["断么九", 1]])]])
  },
  {
    name: "tanyao_2",
    desc: "断么九",
    agariHai: 14,
    isTsumo: false,
    kuitan: true,
    melds: [
      {hai: 5, type: MeldType.CHI},
      {hai: 12, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [2,3,4,21,21,24,25,26],
    expected: new Map([[0, new Map([["断么九", 1]])]])
  },
  {
    name: "tanyao_3",
    desc: "断么九",
    agariHai: 14,
    isTsumo: false,
    kuitan: false,
    melds: [
      {hai: 5, type: MeldType.CHI},
      {hai: 12, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [2,3,4,21,21,24,25,26],
    expected: new Map()
  },
  {
    name: "tanyao_aa",
    desc: "断么九",
    agariHai: 5,
    isTsumo: true,
    kuitan: false,
    melds: [] as MeldSpec[],
    hais: [2,3,4,2,3,4,2,3,4,11,11,11,5,5],
    expected: new Map([[0, new Map([["断么九", 1],["一盃口", 1],["門前清自摸和", 1]])],
      [1, new Map([["四暗刻単騎", 0]])],
      [2, new Map([["断么九", 1],["一盃口", 1],["門前清自摸和", 1]])]
    ])
  },
  {
    name: "sankantsu_1",
    desc: "三槓子",
    agariHai: 14,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.MINKAN},
        {hai: 2, type: MeldType.ANKAN},
        {hai: 3, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [14,15,16,23,23],
    expected: new Map([[0, new Map([["三槓子", 2]])]])
  },
  {
    name: "sankantsu_2",
    desc: "三槓子",
    agariHai: 14,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.ANKAN},
        {hai: 2, type: MeldType.ANKAN},
        {hai: 3, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [14,14,14,23,23],
    expected: new Map([[0, new Map([["三槓子", 2],["三暗刻", 2],["対々和", 2]])]])
  },
  {
    name: "sankantsu_3",
    desc: "三槓子",
    agariHai: 5,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.ANKAN},
        {hai: 2, type: MeldType.ANKAN},
        {hai: 4, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [5,5,5,23,23],
    expected: new Map([[0, new Map([["対々和", 2]])]])
  },
  {
    name: "menzentsumo_1",
    desc: "門前清自摸和",
    agariHai: 1,
    isTsumo: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,15,15,22,22],
    expected: new Map([[0, new Map([["門前清自摸和", 1]])]])
  },
  {
    name: "menzentsumo_2",
    desc: "門前清自摸和",
    agariHai: 1,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,22,22],
    expected: new Map([[0, new Map([["門前清自摸和", 1]])]])
  },
  {
    name: "menzentsumo_3",
    desc: "門前清自摸和",
    agariHai: 1,
    isTsumo: true,
    melds: [
        {hai: 1, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,22,22],
    expected: new Map()
  },
  {
    name: "pinfu_success",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,22,22],
    expected: new Map([[0, new Map([["平和", 1]])]])
  },
  {
    name: "pinfu_kanchan",
    desc: "平和",
    agariHai: 2,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,22,22],
    expected: new Map()
  },
  {
    name: "pinfu_penchan",
    desc: "平和",
    agariHai: 3,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,11,12,13,15,16,17,22,22],
    expected: new Map()
  },
  {
    name: "pinfu_tanki",
    desc: "平和",
    agariHai: 22,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,22,22],
    expected: new Map()
  },
  {
    name: "pinfu_shanpon",
    desc: "平和",
    agariHai: 15,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,15,15,22,22],
    expected: new Map()
  },
  {
    name: "pinfu_naki",
    desc: "平和",
    agariHai: 3,
    isTsumo: false,
    melds: [
        {hai: 1, type: MeldType.CHI},
    ] as MeldSpec[],
    hais: [3,4,5,11,12,13,15,16,17,22,22],
    expected: new Map()
  },
  {
    name: "pinfu_haku",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,32,32],
    expected: new Map()
  },
  {
    name: "pinfu_hatsu",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,33,33],
    expected: new Map()
  },
  {
    name: "pinfu_chun",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,34,34],
    expected: new Map()
  },
  {
    name: "pinfu_dabuton",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,28,28],
    expected: new Map()
  },
  {
    name: "pinfu_jikaze",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.SOUTH,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,29,29],
    expected: new Map()
  },
  {
    name: "pinfu_bakaze",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.NORTH,
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,31,31],
    expected: new Map()
  },
  {
    name: "pinfu_kazenasi",
    desc: "平和",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.SOUTH,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,3,4,5,11,12,13,15,16,17,28,28],
    expected: new Map([[0, new Map([["平和", 1]])]])
  },
  {
    name: "renpuuhai_1",
    desc: "連風牌",
    agariHai: 28,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,28,29,29],
    expected: new Map([[0, new Map([["連風牌:東", 2]])]])
  },
  {
    name: "renpuuhai_2",
    desc: "連風牌",
    agariHai: 29,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.SOUTH,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,5,6,7,12,13,14,28,28,29,29,29],
    expected: new Map([[0, new Map([["連風牌:南", 2]])]])
  },
  {
    name: "renpuuhai_3",
    desc: "連風牌",
    agariHai: 28,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.WEST,
    roundWind: TILE.WIND.WEST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,30,30,30],
    expected: new Map([[0, new Map([["連風牌:西", 2]])]])
  },
  {
    name: "renpuuhai_4",
    desc: "連風牌",
    agariHai: 31,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.NORTH,
    roundWind: TILE.WIND.NORTH,
    hais: [1,2,3,5,6,7,12,13,14,28,28,31,31,31],
    expected: new Map([[0, new Map([["連風牌:北", 2]])]])
  },
  {
    name: "renpuuhai_5",
    desc: "連風牌",
    agariHai: 1,
    isTsumo: false,
    melds: [
      {hai: 28, type: MeldType.PON},
    ] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,5,6,7,12,13,14,17,17],
    expected: new Map([[0, new Map([["連風牌:東", 2]])]])
  },
  {
    name: "jifuuhai_1",
    desc: "自風牌",
    agariHai: 28,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,5,6,7,12,13,14,28,28,28,29,29],
    expected: new Map([[0, new Map([["自風牌:東", 1]])]])
  },
  {
    name: "jifuuhai_2",
    desc: "自風牌",
    agariHai: 29,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.SOUTH,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,29,29,29],
    expected: new Map([[0, new Map([["自風牌:南", 1]])]])
  },
  {
    name: "jifuuhai_3",
    desc: "自風牌",
    agariHai: 30,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.WEST,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,30,30,30],
    expected: new Map([[0, new Map([["自風牌:西", 1]])]])
  },
  {
    name: "jifuuhai_4",
    desc: "自風牌",
    agariHai: 31,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.NORTH,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,31,31,31],
    expected: new Map([[0, new Map([["自風牌:北", 1]])]])
  },
  {
    name: "jifuuhai_5",
    desc: "自風牌",
    agariHai: 1,
    isTsumo: false,
    melds: [
      {hai: 28, type: MeldType.PON},
    ] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,5,6,7,12,13,14,17,17],
    expected: new Map([[0, new Map([["自風牌:東", 1]])]])
  },
  {
    name: "bafuuhai_1",
    desc: "場風牌",
    agariHai: 28,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.SOUTH,
    roundWind: TILE.WIND.EAST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,28,29,29],
    expected: new Map([[0, new Map([["場風牌:東", 1]])]])
  },
  {
    name: "bafuuhai_2",
    desc: "場風牌",
    agariHai: 29,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,5,6,7,12,13,14,28,28,29,29,29],
    expected: new Map([[0, new Map([["場風牌:南", 1]])]])
  },
  {
    name: "bafuuhai_3",
    desc: "場風牌",
    agariHai: 30,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.WEST,
    hais: [1,2,3,5,6,7,12,13,14,28,28,30,30,30],
    expected: new Map([[0, new Map([["場風牌:西", 1]])]])
  },
  {
    name: "bafuuhai_4",
    desc: "場風牌",
    agariHai: 28,
    isTsumo: false,
    melds: [] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.NORTH,
    hais: [1,2,3,5,6,7,12,13,14,28,28,31,31,31],
    expected: new Map([[0, new Map([["場風牌:北", 1]])]])
  },
  {
    name: "bafuuhai_5",
    desc: "場風牌",
    agariHai: 1,
    isTsumo: false,
    melds: [
      {hai: 29, type: MeldType.PON},
    ] as MeldSpec[],
    playerWind: TILE.WIND.EAST,
    roundWind: TILE.WIND.SOUTH,
    hais: [1,2,3,5,6,7,12,13,14,17,17],
    expected: new Map([[0, new Map([["場風牌:南", 1]])]])
  },
  {
    name: "yakuhai_1",
    desc: "役牌",
    agariHai: 1,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,10,11,12,32,32,32,33,33],
    expected: new Map([[0, new Map([["白", 1]])]])
  },
  {
    name: "yakuhai_2",
    desc: "役牌",
    agariHai: 32,
    isTsumo: false,
    melds: [] as MeldSpec[],
    hais: [1,2,3,4,5,6,10,10,33,33,33,34,34,34],
    expected: new Map([[0, new Map([["發", 1],["中", 1]])]])
  },
  {
    name: "yakuhai_3",
    desc: "役牌",
    agariHai: 10,
    isTsumo: false,
    melds: [
        {hai: 32, type: MeldType.PON},
        {hai: 33, type: MeldType.PON},
    ] as MeldSpec[],
    hais: [1,2,3,4,5,6,10,10],
    expected: new Map([[0, new Map([["白", 1],["發", 1]])]])
  },
  {
    name: "riichi_1",
    desc: "立直",
    agariHai: 1,
    isTsumo: false,
    riichi: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["立直", 1]])]])
  },
  {
    name: "riichi_2",
    desc: "立直",
    agariHai: 1,
    isTsumo: true,
    riichi: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["立直", 1],["門前清自摸和", 1]])]])
  },
  {
    name: "daburii_1",
    desc: "ダブル立直",
    agariHai: 1,
    isTsumo: false,
    daburii: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["ダブル立直", 2]])]])
  },
  {
    name: "ippatsu_1",
    desc: "一発",
    agariHai: 1,
    isTsumo: false,
    riichi: true,
    ippatsu: true,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["立直", 1],["一発", 1]])]])
  },
  {
    name: "rinshan_1",
    desc: "嶺上開花",
    agariHai: 1,
    isTsumo: true,
    event: WinEvent.RINSHAN,
    melds: [
      {hai: 16, type: MeldType.MINKAN},
    ] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,22,22],
    expected: new Map([[0, new Map([["嶺上開花", 1]])]])
  },
  {
    name: "rinshan_2",
    desc: "嶺上開花",
    agariHai: 1,
    isTsumo: true,
    event: WinEvent.RINSHAN,
    melds: [
      {hai: 16, type: MeldType.ANKAN},
    ] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,22,22],
    expected: new Map([[0, new Map([["嶺上開花", 1],["門前清自摸和", 1]])]])
  },
  {
    name: "chankan_1",
    desc: "槍槓",
    agariHai: 1,
    isTsumo: false,
    event: WinEvent.CHANKAN,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["槍槓", 1]])]])
  },
  {
    name: "haitei_1",
    desc: "海底摸月",
    agariHai: 1,
    isTsumo: true,
    event: WinEvent.HAITEI,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["海底摸月", 1],["門前清自摸和", 1]])]])
  },
  {
    name: "houtei_1",
    desc: "河底撈魚",
    agariHai: 1,
    isTsumo: false,
    event: WinEvent.HOUTEI,
    melds: [] as MeldSpec[],
    hais: [1,2,3,5,5,5,12,13,14,16,16,16,22,22],
    expected: new Map([[0, new Map([["河底撈魚", 1]])]])
  },
];