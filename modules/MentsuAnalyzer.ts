import { IMentsu } from './IMentsu';
import { Wind } from './tileDefs';

export class MentsuAnalyzer {
    private readonly allMentsu: IMentsu[];
    constructor(block: IMentsu[], melds: IMentsu[]){
        this.allMentsu = [...block, ...melds];
    }

    getAll(): IMentsu[]{
        return this.allMentsu;
    }

    hasSingleWindMentsu(
        filter: (m: IMentsu) => boolean,
        requiredWind: Wind,
        forbiddenWind: Wind
    ): boolean {
        return this.allMentsu.some(m => filter(m) && m.isSingleWind(requiredWind) && !m.isSingleWind(forbiddenWind));
    }

    hasDoubleWindMentsu(
        filter: (m: IMentsu) => boolean,
        playerWind: Wind,
        roundWind: Wind
    ): boolean {
        return this.allMentsu.some(m => filter(m) && m.isDoubleWind(playerWind, roundWind));
    }

    hasYakuhaiMentsu(
        filter: (m: IMentsu) => boolean,
        playerWind: Wind,
        roundWind: Wind
    ): boolean {
        return this.allMentsu.some(m => filter(m) && m.isYakuhai(playerWind, roundWind));
    }
}