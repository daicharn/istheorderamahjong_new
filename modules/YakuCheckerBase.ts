import { YakuContext } from './YakuContext';
import { BlockHaisList } from './BlockHaisList';
import { BlockType, MeldType } from './MahjongConsts';

export class YakuCheckerBase {
    protected readonly context: YakuContext;
    
    constructor(context: YakuContext){
        this.context = context;
    }

    //指定された牌の数を手牌と鳴き牌から数える
    protected countTargetBlocks(blockedhaislist: BlockHaisList, target: number[]) {
        const targetNums = new Set(target);
        const foundTargets = new Set<number>();
        let mentsuCount = 0;
        let jantoCount = 0;
        for(const blockhais of blockedhaislist){
            const id = blockhais.getHais()[0].getId();
            if(targetNums.has(id)){
                foundTargets.add(id);
                if(blockhais.getType() === BlockType.KOTSU) mentsuCount++;
                if(blockhais.getType() === BlockType.JANTO) jantoCount++;
            }
        }
        for(const meld of this.context.melds){
            const id = meld.getHais()[0].getId();
            if(targetNums.has(id)){
                //ポン、カンであれば面子としてカウント
                if(meld.getType() !== MeldType.CHI){
                    foundTargets.add(id);
                    mentsuCount++;
                }
            }
        }

        return {foundTargets, mentsuCount, jantoCount};
    }

    //清一色
    protected isChinitsu() {
        const hais = this.context.hais;
        const allTiles = [
            ...hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        if(hais.length === 0) return false;
        const suit = hais[0];
        
        return allTiles.every(h => h.type === suit.type);
    }
}