import { MeldType } from "../modules/MahjongConsts";
import { Wind } from "../modules/tileDefs";

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
    playerWind?: Wind,
    roundWind?: Wind,
    expected: Map<number, Map<string, number>>
};