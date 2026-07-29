import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockType, MeldType } from '../../MahjongConsts';
import { SuankoChecker } from './SuankoChecker';


export class SuankoTankiChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "四暗刻単騎";

    constructor(context: YakuContext, index: number){
        super(context, index);
    }

    protected isSatisfied(): boolean {
        const base = new SuankoChecker(this.context, this.index)
        if(!base.isSatisfied()) return false;

        for(const blockhais of this.context.blocks[this.index]){
            if(blockhais.getType() === BlockType.JANTO){
                if(blockhais.getHais().some(h => h.getId() == this.context.ctx.agariHai.getId())) return true;
            }
        }

        return false;
    }
}