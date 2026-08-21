import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { MentsuAnalyzer } from '../../MentsuAnalyzer';
import { Wind } from '../../tileDefs';


export class KazehaiChecker extends YakuCheckerBase{
    protected yakuName: string;
    private requiredWind: Wind;
    private forbiddenWind: Wind;

    constructor(context: YakuContext, yakuName: string, requiredWind: Wind, forbiddenWind: Wind){
        super(context);
        this.hanMenzen = 1;
        this.hanFuro = 1;
        this.requiredWind = requiredWind;
        this.forbiddenWind = forbiddenWind;
        this.yakuName = `${yakuName}:${requiredWind.name}`;
    }

    protected isSatisfied(): boolean {
        const analyzer = new MentsuAnalyzer(this.context.block.getBlockHais(), this.context.melds);
        return analyzer.hasSingleWindMentsu(m => m.isKotsuOrKantsu(), this.requiredWind, this.forbiddenWind);
    }
}