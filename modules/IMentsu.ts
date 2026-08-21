import { BlockType, MeldType } from "./MahjongConsts";
import { Hai } from "./Hai";
import { Wind } from "./tileDefs";

export interface IMentsu {
    getType(): BlockType | MeldType;
    getHais(): Hai[];
    hasRoutouHai(): boolean;
    hasJihai(): boolean;
    isShuntsu(): boolean;
    isKotsuOrKantsu(): boolean;
    isDragon(): boolean;
    isSingleWind(playerWind: Wind): boolean;
    isDoubleWind(playerWind: Wind, roundWind: Wind): boolean
    isYakuhai(playerWind: Wind, roundWind: Wind): boolean
    containsHai(...haiIds: number[]): boolean;
    clone(): IMentsu;
    get minHai(): Hai;
    get maxHai(): Hai;
}