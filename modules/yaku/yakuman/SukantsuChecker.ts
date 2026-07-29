import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class SukantsuChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "四槓子";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        return this.countKantsu() === 4;
    }
}