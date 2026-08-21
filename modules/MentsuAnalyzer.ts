import { IMentsu } from './IMentsu';
import { Wind } from './tileDefs';

export class MentsuAnalyzer {
    private readonly mentsuList: IMentsu[];
    constructor(mentsuList: IMentsu[]){
        this.mentsuList = mentsuList;
    }

    hasSingleWindMentsu(
        filter: (m: IMentsu) => boolean,
        requiredWind: Wind,
        forbiddenWind: Wind
    ): boolean {
        return this.mentsuList.some(m => filter(m) && m.isSingleWind(requiredWind) && !m.isSingleWind(forbiddenWind));
    }

    hasDoubleWindMentsu(
        filter: (m: IMentsu) => boolean,
        playerWind: Wind,
        roundWind: Wind
    ): boolean {
        return this.mentsuList.some(m => filter(m) && m.isDoubleWind(playerWind, roundWind));
    }

    hasYakuhaiMentsu(
        filter: (m: IMentsu) => boolean,
        playerWind: Wind,
        roundWind: Wind
    ): boolean {
        return this.mentsuList.some(m => filter(m) && m.isYakuhai(playerWind, roundWind));
    }
}