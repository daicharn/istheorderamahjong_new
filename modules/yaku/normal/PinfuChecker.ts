import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockHais } from '../../BlockHais';
import { MachiType } from '../../MahjongConsts';
import { MentsuAnalyzer } from '../../MentsuAnalyzer';

export class PinfuChecker extends YakuCheckerBase{
    protected yakuName: string = "平和";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 1;
    }

    protected isSatisfied(): boolean {
        const analyzer = new MentsuAnalyzer(this.getAllMentsu());
        const pw = this.context.ctx.playerWind;
        const rw = this.context.ctx.roundWind;
        if(!this.isMenzen()) return false;
        if(analyzer.hasYakuhaiMentsu(m => m instanceof BlockHais && m.isJanto(), pw, rw)) return false;
        if(!this.getAllMentsu().every(m => m.isShuntsu() || (m instanceof BlockHais && m.isJanto()))) return false;
        if(!this.context.block.calcMachiType(this.context.ctx.agariHai.getId()).has(MachiType.RYANMEN)) return false;
        
        return true;
    }
}