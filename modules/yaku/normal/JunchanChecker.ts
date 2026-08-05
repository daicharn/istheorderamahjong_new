import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class JunchanChecker extends YakuCheckerBase{
    protected hanMenzen: number = 3;
    protected hanFuro: number = 2;
    protected yakuName: string = "純全帯么九";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = this.getAllMentsu();
        return allMentsu.every(mentsu => mentsu.hasRoutouHai());
    }
}