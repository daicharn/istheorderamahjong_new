import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { YakumanChecker } from './YakumanChecker';
import { BlockHaisList } from '../BlockHaisList';
import { YakuContext } from './YakuContext';
import { NormalYakuChecker } from './NormalYakuChecker';

export class YakuChecker {
    private context: YakuContext

    constructor(context: YakuContext){
        this.context = context;
    }

    check(): Map<string, number> {
        //手牌と鳴き（カンを考慮して鳴き一つを3と数える）が計14枚かどうか確認する
        const tehai_num = this.context.hais.length;
        const furo_num = this.context.melds.length;
        if(tehai_num + furo_num * 3 !== 14) return new Map<string, number>();

        const yakuman_map = new YakumanChecker(this.context).check();
        if(yakuman_map.size === 0){
            return new NormalYakuChecker(this.context).check();
        }
        else{
            return yakuman_map;
        }
    }
}