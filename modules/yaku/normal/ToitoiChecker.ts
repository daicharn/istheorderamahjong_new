import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class ToitoiChecker extends YakuCheckerBase{
    protected hanMenzen: number = 2;
    protected hanFuro: number = 2;
    protected yakuName: string = "対々和";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        return this.countKotsu() === 4;
    }
}