import { MeldType, WinEvent } from "../modules/MahjongConsts";
import { FuDetail } from "../modules/tensuu/FuDetail";
import { Wind } from "../modules/tileDefs";

export type MeldSpec = {
    hai: number,
    type: MeldType;
};

export type TehaiCase<T> = {
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
    expected: T
}