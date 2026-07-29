import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockType } from '../../MahjongConsts';

export class KokushiChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "国士無双";

    constructor(context: YakuContext, index: number){
        super(context, index);
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;
        return this.context.blocks[this.index].getBlockHais().some(b => b.getType() === BlockType.KOKUSHI);
    }

    public isKokushi(): boolean {
        return this.isSatisfied();
    }
}