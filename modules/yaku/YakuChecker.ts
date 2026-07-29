import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { YakumanChecker } from './YakumanChecker';
import { BlockHaisList } from '../BlockHaisList';
import { BlockDivider } from '../BlockDivider';
import { YakuContext } from './YakuContext';

export class YakuChecker {
    private readonly hand: PlayerHand;
    private readonly ctx: PlayerContext;
    private readonly blocks: BlockHaisList[];

    constructor(hand: PlayerHand, ctx: PlayerContext){
        this.hand = hand;
        this.ctx = ctx;
        this.blocks = this.blocks = new BlockDivider(hand.getTehai()).divide();
    }

    check(): Map<number, Map<string, number>> {
        const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();

        this.blocks.forEach((_, index) => {
            const yakuman_map = new YakumanChecker(new YakuContext(this.hand, this.ctx, this.blocks[index])).check();

            if(yakuman_map.size !== 0) yaku_maps.set(index, yakuman_map);
        });
        
        return yaku_maps;
    }
}