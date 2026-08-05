import { YakuCheckerBase } from '../YakuCheckerBase';


export class DaisangenChecker extends YakuCheckerBase{
    protected yakuName: string = "大三元";

    protected isSatisfied(): boolean {
        const {foundTargets, mentsuCount, jantoCount} = this.countTargetBlocks(this.context.block, [32,33,34]);

        if(foundTargets.size !== 3) return false;

        return mentsuCount === 3 && jantoCount === 0;
    }
}