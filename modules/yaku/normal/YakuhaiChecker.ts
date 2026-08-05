import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';

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
        const allMentsu: IMentsu[] = this.getAllMentsu();
        return allMentsu.some(mentsu => mentsu.isKotsuOrKantsu() && mentsu.containsHai(this.targetHai));
    }
}