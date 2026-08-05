import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class HonrotoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 2;
    protected hanFuro: number = 2;
    protected yakuName: string = "混老頭";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = this.getAllMentsu();
        const allYaochu = allMentsu.every(mentsu => (mentsu.hasRoutouHai() || mentsu.hasJihai()));
        const allNotShuntsu = allMentsu.every(mentsu => !mentsu.isShuntsu());

        return allYaochu && allNotShuntsu;
    }
}