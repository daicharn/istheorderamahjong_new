import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { YakumanChecker } from './YakumanChecker';
import { BlockHaisList } from '../BlockHaisList';
import { BlockDivider } from '../BlockDivider';
import { YakuContext } from './YakuContext';
import { NormalYakuChecker } from './NormalYakuChecker';

export class YakuChecker {
    private readonly hand: PlayerHand;
    private readonly ctx: PlayerContext;
    private readonly blocks: BlockHaisList[];

    constructor(hand: PlayerHand, ctx: PlayerContext){
        this.hand = hand;
        this.ctx = ctx;
        this.blocks = new BlockDivider(hand.getTehai()).divide();
    }

    check(): Map<number, Map<string, number>> {
        const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();

        this.blocks.forEach((_, index) => {
            //手牌と鳴き（カンを考慮して鳴き一つを3と数える）が計14枚かどうか確認する
            const tehai_num = this.hand.getTehai().length;
            const furo_num = this.hand.getFuro().length;

            if(tehai_num + furo_num * 3 !== 14) return;

            const yakuman_map = new YakumanChecker(new YakuContext(this.hand, this.ctx, this.blocks[index])).check();

            if(yakuman_map.size === 0){
                const normal_map = new NormalYakuChecker(new YakuContext(this.hand, this.ctx, this.blocks[index])).check();
                if(normal_map.size !== 0) yaku_maps.set(index, normal_map);
            }
            else{
                yaku_maps.set(index, yakuman_map);
            }
        });
        
        return yaku_maps;
    }
}