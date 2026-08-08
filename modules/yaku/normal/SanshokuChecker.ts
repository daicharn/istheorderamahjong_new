import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { HaiType } from '../../MahjongConsts';



export class SanshokuChecker extends YakuCheckerBase{
    protected yakuName: string = "三色同順";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 1;
    }

    protected isSatisfied(): boolean {
        const shuntsuGroups = this.getGroupsMentsu(
            (m) => m.isShuntsu(),
            (m) => `${m.minHai.num}-${m.maxHai.num}`
        );

        for(const group of shuntsuGroups.values()){
            if(this.hasThreeTypes(group)) return true;
        }

        return false;
    }
}