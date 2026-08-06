import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';

export class JifuuhaiChecker extends YakuCheckerBase{
    protected yakuName: string;

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 1;
        this.hanFuro = 1;
        this.yakuName = `自風牌:${this.context.ctx.playerWind.name}`;
    }

    protected isSatisfied(): boolean {
        const allMentsu: IMentsu[] = this.getAllMentsu();
        return allMentsu.some(mentsu => mentsu.isKotsuOrKantsu() && mentsu.containsHai(this.context.ctx.playerWind.id) && !mentsu.containsHai(this.context.ctx.roundWind.id));
    }
}