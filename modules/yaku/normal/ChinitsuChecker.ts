import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinitsuChecker extends YakuCheckerBase{
    protected hanMenzen: number = 6;
    protected hanFuro: number = 5;
    protected yakuName: string = "清一色";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        return this.isChinitsu();
    }
}