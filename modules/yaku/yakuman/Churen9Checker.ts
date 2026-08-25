import { ExtendedYakumanChecker } from './ExtendedYakumanChecker';
import { YakuContext } from '../YakuContext';
import { ChurenChecker } from './ChurenChecker';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class Churen9Checker extends ExtendedYakumanChecker{
    protected yakuName: string = "純正九蓮宝燈";
    protected baseChecker: YakuCheckerBase;
    protected requiredMachiCount: number;

    constructor(context: YakuContext){
        super(context);
        this.baseChecker = new ChurenChecker(context);
        this.requiredMachiCount = 9;
    }
}