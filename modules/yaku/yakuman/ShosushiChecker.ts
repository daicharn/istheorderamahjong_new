import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ShosushiChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "小四喜";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const {foundTargets, mentsuCount, jantoCount} = this.countTargetBlocks(this.context.block, [28,29,30,31]);

        if(foundTargets.size !== 4) return false;

        return mentsuCount === 3 && jantoCount === 1;
    }
}