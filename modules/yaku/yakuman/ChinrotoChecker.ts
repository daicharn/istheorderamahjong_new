import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinrotoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "清老頭";

    constructor(context: YakuContext, index: number){
        super(context, index);
    }

    protected isSatisfied(): boolean {
        const routouNums = new Set([1, 9]);

        const allTiles = [
            ...this.context.hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        return allTiles.every(h => routouNums.has(h.num));
    }
}