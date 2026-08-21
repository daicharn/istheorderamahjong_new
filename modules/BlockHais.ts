import { Hai } from "./Hai";
import { BlockType } from "./MahjongConsts";
import { IMentsu } from "./IMentsu";
import { TILE, Wind } from "./tileDefs";

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

    isJanto(): boolean {
        return this.type === BlockType.JANTO;
    }

    isShuntsu(): boolean {
        return this.type === BlockType.SHUNTSU;
    }

    isKotsuOrKantsu(): boolean {
        return this.type === BlockType.KOTSU;
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