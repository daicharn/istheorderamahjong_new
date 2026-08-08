import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class DoukouChecker extends YakuCheckerBase{
    protected yakuName: string = "三色同刻";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        const shuntsuGroups = this.getGroupsMentsu(
            (m) => m.isKotsuOrKantsu(),
            (m) => `${m.minHai.num}-${m.maxHai.num}`
        );

        return this.hasThreeTypesInGroups(shuntsuGroups);
    }
}