import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';
import { MentsuAnalyzer } from '../../MentsuAnalyzer';


export class HonrotoChecker extends YakuCheckerBase{
    protected yakuName: string = "混老頭";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = new MentsuAnalyzer(this.context.block.getBlockHais(), this.context.melds).getAll();
        const allYaochu = allMentsu.every(mentsu => (mentsu.hasRoutouHai() || mentsu.hasJihai()));
        const allNotShuntsu = allMentsu.every(mentsu => !mentsu.isShuntsu());

        return allYaochu && allNotShuntsu;
    }
}