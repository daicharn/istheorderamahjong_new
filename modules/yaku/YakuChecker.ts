import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { YakumanChecker } from './YakumanChecker';
import { BlockHaisList } from '../BlockHaisList';
import { YakuContext } from './YakuContext';
import { NormalYakuChecker } from './NormalYakuChecker';

export class YakuChecker {
    private readonly hand: PlayerHand;
    private readonly ctx: PlayerContext;
    private readonly block: BlockHaisList;

    constructor(hand: PlayerHand, ctx: PlayerContext, block: BlockHaisList){
        this.hand = hand;
        this.ctx = ctx;
        this.block = block;
    }

    check(): Map<string, number> {
        //手牌と鳴き（カンを考慮して鳴き一つを3と数える）が計14枚かどうか確認する
        const tehai_num = this.hand.getTehai().length;
        const furo_num = this.hand.getFuro().length;

        if(tehai_num + furo_num * 3 !== 14) return new Map<string, number>();

        const context = new YakuContext(this.hand, this.ctx, this.block);

        const yakuman_map = new YakumanChecker(context).check();

        if(yakuman_map.size === 0){
            return new NormalYakuChecker(context).check();
        }
        else{
            return yakuman_map;
        }
    }
}