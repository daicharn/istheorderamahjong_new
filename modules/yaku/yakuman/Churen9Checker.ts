import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { ChurenChecker } from './ChurenChecker';
import { MachiCalculator } from '../../MachiCalculator';

export class Churen9Checker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "純正九蓮宝燈";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const base = new ChurenChecker(this.context);
        if(!base.isChuren()) return false;

        const haisWithoutAgari = this.getHaisWithoutAgariHai();
        const machi = new MachiCalculator(haisWithoutAgari).calculate();

        return machi.length === 9;
    }
}