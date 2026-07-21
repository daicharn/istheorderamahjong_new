import {Hai} from "./Hai";

export class BlockHais {
    private readonly type: "JANTO" | "KOTSU" | "SHUNTSU";
    private readonly hais: Hai[]

    constructor(type: "JANTO" | "KOTSU" | "SHUNTSU", hais: Hai[]){
        this.type = type;
        this.hais = hais;
    }

    getType(): "JANTO" | "KOTSU" | "SHUNTSU" {
        return this.type;
    }

    getHais(): Hai[] {
        return this.hais;
    }

    clone(): BlockHais {
        return new BlockHais(this.type, this.hais.map(h => h.clone()));
    }
}