import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { HaiType } from '../../MahjongConsts';



export class SanshokuChecker extends YakuCheckerBase{
    protected hanMenzen: number = 2;
    protected hanFuro: number = 1;
    protected yakuName: string = "三色同順";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const shuntsuGroups = this.getGroupsMentsu(
            (m) => m.isShuntsu(),
            (m) => `${m.minHai.num}-${m.maxHai.num}`
        );

        for(const group of shuntsuGroups.values()){
            const types = new Set(group.map(m => m.minHai.type));
            if(types.has(HaiType.MANZU) && types.has(HaiType.PINZU) && types.has(HaiType.SOUZU)){
                return true;
            }
        }

        return false;
    }
}