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
    playerWind?: "E" | "S" | "W" | "N",
    roundWind?: "E" | "S" | "W" | "N",
    expected: Map<number, Map<string, number>>
};