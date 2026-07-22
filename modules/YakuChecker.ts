import {PlayerHand} from './PlayerHand';
import {PlayerContext} from './PlayerContext';
import {BlockHaisList} from './BlockHaisList';
import {BlockDivider} from './BlockDivider';
import { Melds } from './Melds';

export class YakuChecker {
    private readonly hand: PlayerHand;
    private readonly ctx: PlayerContext;
    private readonly blockedhaislists: BlockHaisList[];

    constructor(hand: PlayerHand, ctx: PlayerContext){
        this.hand = hand;
        this.ctx = ctx;
        this.blockedhaislists = new BlockDivider(this.hand.getTehai()).divide();
    }

    get blockedhais(): BlockHaisList[]{
        return this.blockedhaislists;
    }

    //役判定
    check(): Map<string, number> {
        const yaku_map: Map<string, number> = new Map<string, number>();

        if(this.isTsuiso()) yaku_map.set("字一色", 0);
        if(this.isChinroto()) yaku_map.set("清老頭", 0);

        return yaku_map;
    }

    //字一色の判定
    isTsuiso(): boolean {
        const allTiles = [
            ...this.hand.getTehai(),
            ...this.hand.getFuro().flatMap(m => m.getHais())
        ];

        return allTiles.every(h => h.isJihaiTile());
    }
    //清老頭の判定
    isChinroto(): boolean {
        const allTiles = [
            ...this.hand.getTehai(),
            ...this.hand.getFuro().flatMap(m => m.getHais())
        ];

        return allTiles.every(h => [1, 9].includes(h.num));
    }
}