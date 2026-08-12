import { WinEvent } from '../MahjongConsts';
import { YakuContext } from './YakuContext';
import { NormalYakuCheckers } from './index';

export class NormalYakuChecker{
    protected readonly context: YakuContext;

    constructor(context: YakuContext){
        this.context = context;
    }

    //役判定
    check(): Map<string, number> {
        const yaku_map: Map<string, number> = new Map();
        for(const Checker of NormalYakuCheckers) {
            const checker = Checker(this.context);
            if(checker.check()) yaku_map.set(checker.getName(), checker.getHan());
        }

        if(this.context.ctx.riichi) yaku_map.set("立直", 1);
        if(this.context.ctx.daburii) yaku_map.set("ダブル立直", 2);
        if(this.context.ctx.ippatsu) yaku_map.set("一発", 1);
        if(this.context.ctx.event === WinEvent.RINSHAN) yaku_map.set("嶺上開花", 1);
        if(this.context.ctx.event === WinEvent.CHANKAN) yaku_map.set("槍槓", 1);
        if(this.context.ctx.event === WinEvent.HAITEI) yaku_map.set("海底摸月", 1);
        if(this.context.ctx.event === WinEvent.HOUTEI) yaku_map.set("河底撈魚", 1);
        

        return yaku_map;
    }
}