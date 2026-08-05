import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { KokushiChecker } from './KokushiChecker';

export class Kokushi13Checker extends YakuCheckerBase{
    protected yakuName: string = "国士無双13面待ち";

    constructor(context: YakuContext){
        super(context);
    }

    public isSatisfied(): boolean {
        const base = new KokushiChecker(this.context);
        if(!base.isKokushi()) return false;

        const machiCount = this.calculateMachiCount();
        return machiCount === 13;
    }
}