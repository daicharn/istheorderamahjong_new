import { PlayerHand } from '../PlayerHand';
import { PlayerContext } from '../PlayerContext';
import { YakumanChecker } from './YakumanChecker';
import { BlockHaisList } from '../BlockHaisList';
import { YakuContext } from './YakuContext';
import { NormalYakuChecker } from './NormalYakuChecker';

export class YakuChecker {
    private yakuContext: YakuContext

    constructor(yakuContext: YakuContext){
        this.yakuContext = yakuContext;
    }

    check(): Map<string, number> {
        //手牌と鳴き（カンを考慮して鳴き一つを3と数える）が計14枚かどうか確認する
        const tehai_num = this.yakuContext.hais.length;
        const furo_num = this.yakuContext.melds.length;
        if(tehai_num + furo_num * 3 !== 14) return new Map<string, number>();

        const yakuman_map = new YakumanChecker(this.yakuContext).check();
        if(yakuman_map.size === 0){
            return new NormalYakuChecker(this.yakuContext).check();
        }
        else{
            return yakuman_map;
        }
    }
}