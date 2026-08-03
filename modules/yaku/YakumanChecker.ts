import { YakuContext } from './YakuContext';
import { YakumanCheckers } from './index';

export class YakumanChecker{
    protected readonly context: YakuContext;

    constructor(context: YakuContext){
        this.context = context;
    }

    //役判定
    check(): Map<string, number> {
        const excludes = [
            { main: "純正九蓮宝燈", sub: "九蓮宝燈"},
            { main: "四暗刻単騎", sub: "四暗刻"},
            { main: "国士無双13面待ち", sub: "国士無双"},
        ];
        const yaku_map: Map<string, number> = new Map();
        for(const Checker of YakumanCheckers) {
            const checker = Checker(this.context);
            if(checker.check()) yaku_map.set(checker.getName(), checker.getHan());
        }

        for(const { main, sub } of excludes) {
            if(yaku_map.has(main)) yaku_map.delete(sub);
        }

        if(this.context.ctx.tenho) yaku_map.set("天和", 0);
        if(this.context.ctx.chiho) yaku_map.set("地和", 0);

        return yaku_map;
    }
}