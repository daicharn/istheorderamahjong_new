import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { YakuContext } from './YakuContext';
import { YakumanChecker } from './YakumanChecker';

export class YakuChecker {
    private readonly context: YakuContext;

    constructor(hand: PlayerHand, ctx: PlayerContext){
        this.context = new YakuContext(hand, ctx);
    }

    check(): Map<number, Map<string, number>> {
        const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();

        this.context.blocks.forEach((_, index) => {
            const yakuman_map = new YakumanChecker(this.context, index).check();

            if(yakuman_map.size !== 0) yaku_maps.set(index, yakuman_map);
        });
        
        return yaku_maps;
    }
}