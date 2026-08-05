import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockType } from '../../MahjongConsts';


export class ChitoitsuChecker extends YakuCheckerBase{
    protected yakuName: string = "七対子";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;

        return this.context.block.getBlockHais().length === 7 
            && this.context.block.getBlockHais().every(block => block.getType() ===  BlockType.JANTO);
    }
}