import { MeldType, WinEvent } from "../modules/MahjongConsts";
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
    event?: WinEvent,
    playerWind?: Wind,
    roundWind?: Wind,
    riichi?: boolean,
    daburii?: boolean,
    ippatsu?: boolean,
    kuitan?: boolean,
    expected: Map<number, Map<string, number>>
};