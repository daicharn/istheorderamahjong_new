import { BlockType, MeldType } from "./MahjongConsts";
import { Hai } from "./Hai";

export interface IMentsu {
    getType(): BlockType | MeldType;
    getHais(): Hai[];
    clone(): IMentsu;
}