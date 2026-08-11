import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockHais } from '../../BlockHais';
import { MachiType } from '../../MahjongConsts';

export class PinfuChecker extends YakuCheckerBase{
    protected yakuName: string = "平和";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 1;
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;
        if(this.hasYakuhaiMentsu(m => m instanceof BlockHais && m.isJanto())) return false;
        if(!this.getAllMentsu().every(m => m.isShuntsu() || (m instanceof BlockHais && m.isJanto()))) return false;
        if(!this.context.block.calcMachiType(this.context.ctx.agariHai.getId()).has(MachiType.RYANMEN)) return false;
        
        return true;
    }
}