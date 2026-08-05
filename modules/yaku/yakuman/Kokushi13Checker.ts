import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { MachiCalculator } from '../../MachiCalculator';
import { KokushiChecker } from './KokushiChecker';

export class Kokushi13Checker extends YakuCheckerBase{
    protected yakuName: string = "国士無双13面待ち";

    constructor(context: YakuContext){
        super(context);
    }

    public isSatisfied(): boolean {
        const base = new KokushiChecker(this.context);
        if(!base.isKokushi()) return false;

        const haisWithoutAgari = this.getHaisWithoutAgariHai();
        const machi = new MachiCalculator(haisWithoutAgari).calculate();

        return machi.length === 13;
    }
}