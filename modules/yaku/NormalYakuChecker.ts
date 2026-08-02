import { YakuContext } from './YakuContext';
import { NormalYakuCheckers } from './index';

export class NormalYakuChecker{
    protected readonly context: YakuContext;

    constructor(context: YakuContext){
        this.context = context;
    }

    //役判定
    check(): Map<string, number> {
        const excludes = [
            { main: "純全帯么九", sub: "混全帯么九"},
        ];
        const yaku_map: Map<string, number> = new Map();
        for(const Checker of NormalYakuCheckers) {
            const checker = new Checker(this.context);
            if(checker.check()) yaku_map.set(checker.getName(), checker.getHan());
        }

        for(const { main, sub } of excludes) {
            if(yaku_map.has(main)) yaku_map.delete(sub);
        }

        return yaku_map;
    }
}