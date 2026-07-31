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

    clone(): Meld {
        return new Meld(this.hais.map(h => h.clone()), this.type);
    }

    get min(): number {
        return Math.min(...this.hais.map(h => h.num));
    }

    get max(): number {
        return Math.max(...this.hais.map(h => h.num));
    }
}