import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class HonchanChecker extends YakuCheckerBase{
    protected hanMenzen: number = 2;
    protected hanFuro: number = 1;
    protected yakuName: string = "混全帯么九";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = [...this.context.block, ...this.context.melds];

        const allYaochu = allMentsu.every(mentsu => (mentsu.hasRoutouHai() || mentsu.hasJihai()));
        const hasShuntsu = allMentsu.some(mentsu => mentsu.isShuntsu());
        const hasJihai = allMentsu.some(mentsu => mentsu.hasJihai());

        return allYaochu && hasShuntsu && hasJihai;
    }
}