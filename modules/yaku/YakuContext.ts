import { Hai } from '../Hai';
import { Meld } from '../Meld';
import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { BlockHaisList } from '../BlockHaisList';

export class YakuContext {
    readonly hand: PlayerHand;
    readonly hais: Hai[];
    readonly block: BlockHaisList;
    readonly melds: Meld[];
    readonly ctx: PlayerContext;

    constructor(hand: PlayerHand, ctx: PlayerContext, block: BlockHaisList){
        this.hand = hand;
        this.hais = hand.getTehai();
        this.melds = hand.getFuro();
        this.ctx = ctx;
        this.block = block;
    }
}