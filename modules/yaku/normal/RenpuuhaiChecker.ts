import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';

export class RenpuuhaiChecker extends YakuCheckerBase{
    protected yakuName: string;

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
        this.yakuName = `連風牌:${this.context.ctx.playerWind.name}`;
    }

    protected isSatisfied(): boolean {
        return this.hasRenpuuMentsu((m) => m.isKotsuOrKantsu());
    }
}