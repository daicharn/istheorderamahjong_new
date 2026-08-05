import { YakuCheckerBase } from '../YakuCheckerBase';

export class SuankoChecker extends YakuCheckerBase{
    protected yakuName: string = "四暗刻";

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;
        return this.countAnko() === 4;
    }

    public isSuanko(): boolean {
        return this.isSatisfied();
    }
}