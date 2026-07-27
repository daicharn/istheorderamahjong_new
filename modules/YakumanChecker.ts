import { YakuContext } from './YakuContext';
import { BlockHaisList } from './BlockHaisList';
import { YakuCheckerBase } from './YakuCheckerBase';
import { BlockType, MeldType } from './MahjongConsts';

export class YakumanChecker extends YakuCheckerBase{
    constructor(context: YakuContext){
        super(context);
    }

    //役判定
    check(): Map<number, Map<string, number>> {
        const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();

        //面子構造に依存しない役の判定
        const flatYaku = new Map<string, number>();
        const flatYakus = [
            {check: this.isTsuiso, name: "字一色"},
            {check: this.isChinroto, name: "清老頭"},
            {check: this.isRyuiso, name: "緑一色"},
        ];
        for(const y of flatYakus){
            if(y.check.call(this)) flatYaku.set(y.name, 0);
        }

        this.context.blocks.forEach((blocks, index) => {
            const yaku_map: Map<string, number> = new Map(flatYaku);

            const yakus = [
                {check: this.isShosushi, name: "小四喜"},
                {check: this.isDaisushi, name: "大四喜"},
                {check: this.isDaisangen, name: "大三元"},
            ];
            for(const y of yakus){
                if(y.check.call(this, blocks)) yaku_map.set(y.name, 0);
            }

            if(this.isSuankoTanki(blocks)) yaku_map.set("四暗刻単騎", 0);
            else if(this.isSuanko(blocks)) yaku_map.set("四暗刻", 0);

            if(yaku_map.size !== 0) yaku_maps.set(index, yaku_map);
        });

        return yaku_maps;
    }

    

    //小四喜
    private isShosushi(blockedhaislist: BlockHaisList): boolean {
        const {foundTargets, mentsuCount, jantoCount} = this.countTargetBlocks(blockedhaislist, [28,29,30,31]);

        if(foundTargets.size !== 4) return false;

        return mentsuCount === 3 && jantoCount === 1;
    }
    //大四喜
    private isDaisushi(blockedhaislist: BlockHaisList): boolean {
        const {foundTargets, mentsuCount, jantoCount} = this.countTargetBlocks(blockedhaislist, [28,29,30,31]);

        if(foundTargets.size !== 4) return false;

        return mentsuCount === 4 && jantoCount === 0;
    }
    //字一色
    private isTsuiso(): boolean {
        const allTiles = [
            ...this.context.hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        return allTiles.every(h => h.isJihaiTile());
    }
    //清老頭
    private isChinroto(): boolean {
        const routouNums = new Set([1, 9]);

        const allTiles = [
            ...this.context.hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        return allTiles.every(h => routouNums.has(h.num));
    }
    //緑一色
    private isRyuiso(): boolean {
        const greenNums = new Set([20, 21, 22, 24, 26, 33]);

        const allTiles = [
            ...this.context.hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        return allTiles.every(h => greenNums.has(h.getId()));
    }
    //四暗刻
    private isSuanko(blockedhaislist: BlockHaisList): boolean {
        if(!this.context.ctx.isMenzen) return false;

        let ankoCount = 0;
        for(const blockhais of blockedhaislist){
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
    //四暗刻単騎
    private isSuankoTanki(blockedhaislist: BlockHaisList): boolean {
        if (!this.isSuanko(blockedhaislist)) return false;

        for(const blockhais of blockedhaislist){
            if(blockhais.getType() === BlockType.JANTO){
                if(blockhais.getHais().some(h => h.getId() == this.context.ctx.agariHai.getId())) return true;
            }
        }

        return false;
    }
    //大三元
    private isDaisangen(blockedhaislist: BlockHaisList): boolean {
        const {foundTargets, mentsuCount, jantoCount} = this.countTargetBlocks(blockedhaislist, [32,33,34]);

        if(foundTargets.size !== 3) return false;

        return mentsuCount === 3 && jantoCount === 0;
    }
}