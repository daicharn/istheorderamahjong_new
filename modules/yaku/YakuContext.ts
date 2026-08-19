import { Hai } from '../Hai';
import { Meld } from '../Meld';
import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { BlockHaisList } from '../BlockHaisList';

export class YakuContext {
    readonly hand: PlayerHand;
    readonly block: BlockHaisList;
    readonly ctx: PlayerContext;

    constructor(hand: PlayerHand, ctx: PlayerContext, block: BlockHaisList){
        this.hand = hand;
        this.ctx = ctx;
        this.block = block;
    }

    get hais(): Hai[]{
        return this.hand.getTehai();
    }

    get melds(): Meld[]{
        return this.hand.getFuro();
    }
}