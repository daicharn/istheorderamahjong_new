import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class JunchanChecker extends YakuCheckerBase{
    protected yakuName: string = "純全帯么九";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 3;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = this.getAllMentsu();
        return allMentsu.every(mentsu => mentsu.hasRoutouHai());
    }
}