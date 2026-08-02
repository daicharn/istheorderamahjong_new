import {Hai} from "./Hai";
import { BlockType } from "./MahjongConsts";
import { IMentsu } from "./IMentsu";

export class BlockHais implements IMentsu {
    private readonly type: BlockType;
    private readonly hais: Hai[]

    constructor(hais: Hai[], type: BlockType){
        this.type = type;
        this.hais = hais;
    }

    getType(): BlockType {
        return this.type;
    }

    getHais(): Hai[] {
        return this.hais;
    }

    hasRoutouHai(): boolean {
        return this.hais.some(h => h.isRoutouHai());
    }

    hasJihai(): boolean {
        return this.hais.some(h => h.isJihai());
    }

    isShuntsu(): boolean {
        return this.type === BlockType.SHUNTSU;
    }

    isKoutsuOrKantsu(): boolean {
        return this.type === BlockType.KOTSU;
    }

    clone(): BlockHais {
        return new BlockHais(this.hais.map(h => h.clone()), this.type);
    }

    get minHai(): Hai {
        return this.hais.reduce((min, h) => h.num < min.num ? h : min);
    }

    get maxHai(): Hai {
        return this.hais.reduce((max, h) => h.num > max.num ? h : max);
    }
}