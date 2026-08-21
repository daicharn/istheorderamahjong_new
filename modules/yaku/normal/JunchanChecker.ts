import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';
import { MentsuAnalyzer } from '../../MentsuAnalyzer';


export class JunchanChecker extends YakuCheckerBase{
    protected yakuName: string = "純全帯么九";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 3;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = new MentsuAnalyzer(this.context.block.getBlockHais(), this.context.melds).getAll();
        return allMentsu.every(mentsu => mentsu.hasRoutouHai());
    }
}