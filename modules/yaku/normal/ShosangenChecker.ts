import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ShosangenChecker extends YakuCheckerBase{
    protected hanMenzen: number = 2;
    protected hanFuro: number = 2;
    protected yakuName: string = "小三元";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const {foundTargets, mentsuCount, jantoCount} = this.countTargetBlocks(this.context.block, [32,33,34]);

        if(foundTargets.size !== 3) return false;

        return mentsuCount === 2 && jantoCount === 1;
    }
}