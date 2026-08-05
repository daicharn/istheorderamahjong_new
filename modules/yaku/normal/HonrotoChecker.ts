import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class HonrotoChecker extends YakuCheckerBase{
    protected yakuName: string = "混老頭";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = this.getAllMentsu();
        const allYaochu = allMentsu.every(mentsu => (mentsu.hasRoutouHai() || mentsu.hasJihai()));
        const allNotShuntsu = allMentsu.every(mentsu => !mentsu.isShuntsu());

        return allYaochu && allNotShuntsu;
    }
}