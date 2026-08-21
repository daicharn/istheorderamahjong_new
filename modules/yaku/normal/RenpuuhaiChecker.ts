import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { MentsuAnalyzer } from '../../MentsuAnalyzer';

export class RenpuuhaiChecker extends YakuCheckerBase{
    protected yakuName: string;

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
        this.yakuName = `連風牌:${this.context.ctx.playerWind.name}`;
    }

    protected isSatisfied(): boolean {
        const analyzer = new MentsuAnalyzer(this.getAllMentsu());
        const pw = this.context.ctx.playerWind;
        const rw = this.context.ctx.roundWind;
        return analyzer.hasDoubleWindMentsu(m => m.isKotsuOrKantsu(), pw, rw);
    }
}