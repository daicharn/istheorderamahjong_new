import { Hai } from '../Hai';
import { Meld } from '../Meld';
import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { BlockHaisList } from '../BlockHaisList';
import { BlockDivider } from '../BlockDivider';

export class YakuContext {
    readonly hais: Hai[];
    readonly block: BlockHaisList;
    readonly melds: Meld[];
    readonly ctx: PlayerContext;

    constructor(hand: PlayerHand, ctx: PlayerContext, block: BlockHaisList){
        this.hais = hand.getTehai();
        this.melds = hand.getFuro();
        this.ctx = ctx;
        this.block = block;
    }
}