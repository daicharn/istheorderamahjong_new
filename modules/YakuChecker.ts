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
        this.blockedhaislists = new BlockDivider(this.hand.getTehai().getHais()).divide();
    }

    get blockedhais(): BlockHaisList[]{
        return this.blockedhaislists;
    }

    //役判定
    check(): boolean {
        for(const blockedhaislist of this.blockedhaislists){
            if(this.isTsuiso(blockedhaislist, this.hand.getFuro())) return true;
        }

        return false;
    } 

    //字一色の判定
    isTsuiso(blockedhaislist: BlockHaisList, melds: Melds): boolean {
        for(const blockhais of blockedhaislist){
            if(blockhais.getHais()[0].isNumberTile()) return false;
        }
        for(const meld of melds){
            if(meld.getHais()[0].isNumberTile()) return false;
        }

        return true;
    }
}