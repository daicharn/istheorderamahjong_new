import { PlayerHand } from './PlayerHand';
import { PlayerContext } from './PlayerContext';
import { YakuContext } from './YakuContext';
import { YakumanChecker } from './YakumanChecker';

export class YakuChecker {
    private readonly context: YakuContext;

    constructor(hand: PlayerHand, ctx: PlayerContext){
        this.context = new YakuContext(hand, ctx);
    }

    check(): Map<number, Map<string, number>> {
        const yakuman = new YakumanChecker(this.context).check();

        return yakuman;
    }
}