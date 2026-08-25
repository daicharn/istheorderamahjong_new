import { ExtendedYakumanChecker } from './ExtendedYakumanChecker';
import { YakuContext } from '../YakuContext';
import { KokushiChecker } from './KokushiChecker';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class Kokushi13Checker extends ExtendedYakumanChecker{
    protected yakuName: string = "国士無双13面待ち";
    protected baseChecker: YakuCheckerBase;
    protected requiredMachiCount: number;

    constructor(context: YakuContext){
        super(context);
        this.baseChecker = new KokushiChecker(context);
        this.requiredMachiCount = 13;
    }
}