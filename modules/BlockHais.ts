import {Hai} from "./Hai";
import { BlockType } from "./MahjongConsts";

export class BlockHais {
    private readonly type: BlockType;
    private readonly hais: Hai[]

    constructor(type: BlockType, hais: Hai[]){
        this.type = type;
        this.hais = hais;
    }

    getType(): BlockType {
        return this.type;
    }

    getHais(): Hai[] {
        return this.hais;
    }

    clone(): BlockHais {
        return new BlockHais(this.type, this.hais.map(h => h.clone()));
    }
}