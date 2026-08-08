import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';

export class SanshokuChecker extends YakuCheckerBase{
    protected yakuName: string = "三色同順";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 1;
    }

    protected isSatisfied(): boolean {
        return this.checkSanshoku((m) => m.isShuntsu(), (m) => `${m.minHai.num}-${m.maxHai.num}`);
    }
}