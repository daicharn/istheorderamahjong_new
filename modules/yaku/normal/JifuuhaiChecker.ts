import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class JifuuhaiChecker extends YakuCheckerBase{
    protected yakuName: string;

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 1;
        this.hanFuro = 1;
        this.yakuName = `自風牌:${this.context.ctx.playerWind.name}`;
    }

    protected isSatisfied(): boolean {
        return this.hasPlayerWindMentsu((m) => m.isKotsuOrKantsu());
    }
}