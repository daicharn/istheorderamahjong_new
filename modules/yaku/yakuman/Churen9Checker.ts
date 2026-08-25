import { YakuCheckerBase } from '../YakuCheckerBase';
import { YakuContext } from '../YakuContext';
import { ChurenChecker } from './ChurenChecker';

export class Churen9Checker extends YakuCheckerBase{
    protected yakuName: string = "純正九蓮宝燈";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 26;
        this.hanFuro = 26
    }

    protected isSatisfied(): boolean {
        const base = new ChurenChecker(this.context);
        if(!base.isChuren()) return false;

        const machiCount = this.calculateMachiCount();
        return machiCount === 9;
    }
}