import { BlockType, MeldType } from "./MahjongConsts";
import { Hai } from "./Hai";

export interface IMentsu {
    getType(): BlockType | MeldType;
    getHais(): Hai[];
    hasRoutouHai(): boolean;
    hasJihai(): boolean;
    isShuntsu(): boolean;
    isKotsuOrKantsu(): boolean;
    containsHai(haiId: number): boolean;
    clone(): IMentsu;
    get minHai(): Hai;
    get maxHai(): Hai;
}