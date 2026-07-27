import { MeldType } from "../modules/MahjongConsts";

export type MeldSpec = {
    hai: number,
    type: MeldType;
};

export type TehaiCase = {
    name: string,
    desc: string,
    agariHai: number,
    isTsumo: boolean,
    melds: MeldSpec[],
    hais: number[],
    expected: Map<number, Map<string, number>>
};