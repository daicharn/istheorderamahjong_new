import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class IipekoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 1;
    protected hanFuro: number = 0;
    protected yakuName: string = "一盃口";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;
        return this.countSameShuntsuGroups() === 1;
    }
}