import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { BlockType, MeldType } from '../../MahjongConsts';


export class SuankoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "四暗刻";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;

        let ankoCount = 0;
        for(const blockhais of this.context.block){
            if(blockhais.getType() === BlockType.KOTSU){
                //ロンであり刻子にアガリ牌が含まれている場合暗刻として認めない
                if(!this.context.ctx.isTsumo && blockhais.getHais().some(h => h.getId() == this.context.ctx.agariHai.getId())) continue;
                ankoCount++;
            }
        }
        for(const meld of this.context.melds){
            if(meld.getType() === MeldType.ANKAN) ankoCount++;
        }

        return ankoCount === 4;
    }

    public isSuanko(): boolean {
        return this.isSatisfied();
    }
}