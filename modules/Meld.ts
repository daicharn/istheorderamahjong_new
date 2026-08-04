import { Hai } from './Hai';
import { MeldType } from './MahjongConsts';
import { IMentsu } from './IMentsu';

export class Meld implements IMentsu {
    private readonly hais: Hai[];
    private readonly type: MeldType;

    constructor(hais: Hai[], type: MeldType){
        this.hais = hais;
        this.type = type;
    }

    getHais(): Hai[] {
        return this.hais;
    }

    getType(): MeldType {
        return this.type;
    }

    hasRoutouHai(): boolean {
        return this.hais.some(h => h.isRoutouHai());
    }

    hasJihai(): boolean {
        return this.hais.some(h => h.isJihai());
    }

    isShuntsu(): boolean {
        return this.type === MeldType.CHI;
    }

    isKotsuOrKantsu(): boolean {
        return this.type === MeldType.PON || this.type === MeldType.ANKAN || this.type === MeldType.MINKAN;
    }

    containsHai(haiId: number): boolean {
        return this.hais.some(h => h.getId() === haiId);
    }

    clone(): Meld {
        return new Meld(this.hais.map(h => h.clone()), this.type);
    }

    get minHai(): Hai {
        return this.hais.reduce((min, h) => h.num < min.num ? h : min);
    }

    get maxHai(): Hai {
        return this.hais.reduce((max, h) => h.num > max.num ? h : max);
    }
}