import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class ToitoiChecker extends YakuCheckerBase{
    protected yakuName: string = "対々和";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        return this.countKotsu() === 4;
    }
}