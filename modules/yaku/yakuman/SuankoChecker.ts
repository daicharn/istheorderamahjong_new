import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockType, MeldType } from '../../MahjongConsts';


export class SuankoChecker extends YakuCheckerBase{
    protected yakuName: string = "四暗刻";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;
        return this.countAnko() === 4;
    }

    public isSuanko(): boolean {
        return this.isSatisfied();
    }
}