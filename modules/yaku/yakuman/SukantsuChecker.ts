import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class SukantsuChecker extends YakuCheckerBase{
    protected yakuName: string = "四槓子";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        return this.countKantsu() === 4;
    }
}