import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinitsuChecker extends YakuCheckerBase{
    protected yakuName: string = "清一色";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 6;
        this.hanFuro = 5;
    }

    protected isSatisfied(): boolean {
        return this.isChinitsu();
    }
}