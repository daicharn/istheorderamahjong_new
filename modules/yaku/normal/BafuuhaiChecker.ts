import { Hai } from '../../Hai';
import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class BafuuhaiChecker extends YakuCheckerBase{
    protected yakuName: string;

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 1;
        this.hanFuro = 1;
        this.yakuName = `場風牌:${this.context.ctx.roundWind.name}`;
    }

    protected isSatisfied(): boolean {
        return this.hasHaisMentsu((m) => m.isKotsuOrKantsu(), [new Hai(this.context.ctx.roundWind.id)], [new Hai(this.context.ctx.playerWind.id)]);
    }
}