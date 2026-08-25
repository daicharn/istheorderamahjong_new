import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockType } from '../../MahjongConsts';
import { SuankoChecker } from './SuankoChecker';
import { YakuContext } from '../YakuContext';


export class SuankoTankiChecker extends YakuCheckerBase{
    protected yakuName: string = "四暗刻単騎";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 26;
        this.hanFuro = 26
    }

    protected isSatisfied(): boolean {
        const base = new SuankoChecker(this.context)
        if(!base.isSuanko()) return false;

        for(const blockhais of this.context.block){
            if(blockhais.getType() === BlockType.JANTO){
                if(blockhais.getHais().some(h => h.getId() == this.context.ctx.agariHai.getId())) return true;
            }
        }

        return false;
    }
}