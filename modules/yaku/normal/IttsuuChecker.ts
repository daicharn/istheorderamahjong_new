import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { HaiType } from '../../MahjongConsts';



export class IttsuuChecker extends YakuCheckerBase{
    protected yakuName: string = "一気通貫";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 2;
        this.hanFuro = 1;
    }

    protected isSatisfied(): boolean {
        const shuntsuGroups = this.getGroupsMentsu(
            (m) => m.isShuntsu(),
            (m) => m.minHai.type.toString()
        );

        for(const group of shuntsuGroups.values()){
            const hai123 = group.some(m => m.minHai.num === 1 && m.maxHai.num === 3);
            const hai456 = group.some(m => m.minHai.num === 4 && m.maxHai.num === 6);
            const hai789 = group.some(m => m.minHai.num === 7 && m.maxHai.num === 9);

            if(hai123 && hai456 && hai789) return true;
        }

        return false;
    }
}