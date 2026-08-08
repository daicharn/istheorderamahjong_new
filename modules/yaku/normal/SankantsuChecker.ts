import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class SankantsuChecker extends YakuCheckerBase{
    protected yakuName: string = "三槓子";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
    }
    
    protected isSatisfied(): boolean {
        return this.countKantsu() === 3;
    }
}