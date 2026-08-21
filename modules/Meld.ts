import { Hai } from './Hai';
import { MeldType } from './MahjongConsts';
import { IMentsu } from './IMentsu';
import { TILE, Wind } from "./tileDefs";

export class Meld implements IMentsu {
    private readonly hais: Hai[];
    private readonly type: MeldType;

    constructor(hais: Hai[], type: MeldType){
        this.hais = hais;
        this.type = type;
    }

    static from(haiId: number, type: MeldType): Meld {
        const hai = new Hai(haiId);
        if(type === MeldType.PON){
            return new Meld([hai.clone(), hai.clone(), hai.clone()], type);
        }
        if(type === MeldType.CHI){
            return new Meld([hai.clone(), new Hai(haiId + 1), new Hai(haiId + 2)], type);
        }
        else
            return new Meld([hai.clone(), hai.clone(), hai.clone(), hai.clone()], type);
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

    isDragon(): boolean {
        return this.containsHai(TILE.DRAGON.WHITE.id, TILE.DRAGON.GREEN.id, TILE.DRAGON.RED.id);
    }

    isSingleWind(targetWind: Wind): boolean {
        return this.containsHai(targetWind.id);
    }

    isDoubleWind(playerWind: Wind, roundWind: Wind): boolean {
        return this.isSingleWind(playerWind) && this.isSingleWind(roundWind);
    }

    isYakuhai(playerWind: Wind, roundWind: Wind): boolean {
        return this.isDragon() ||
               this.isSingleWind(playerWind) ||
               this.isSingleWind(roundWind) ||
               this.isDoubleWind(playerWind, roundWind);
    }

    containsHai(...haiIds: number[]): boolean {
        return this.hais.some(h => haiIds.includes(h.getId()));
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