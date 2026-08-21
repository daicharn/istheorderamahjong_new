import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';
import { MentsuAnalyzer } from '../../MentsuAnalyzer';

export class YakuhaiChecker extends YakuCheckerBase{
    protected yakuName: string;
    private targetHai: number;

    constructor(context: YakuContext, targetHai: number, yakuName: string){
        super(context);
        this.targetHai = targetHai;
        this.yakuName = yakuName;
        this.hanMenzen = 1;
        this.hanFuro = 1;
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = new MentsuAnalyzer(this.context.block.getBlockHais(), this.context.melds).getAll();
        return allMentsu.some(mentsu => mentsu.isKotsuOrKantsu() && mentsu.containsHai(this.targetHai));
    }
}