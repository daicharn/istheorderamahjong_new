import {PlayerHand} from './PlayerHand';
import {PlayerContext} from './PlayerContext';
import {BlockHaisList} from './BlockHaisList';
import {BlockDivider} from './BlockDivider';
import { BlockType, MeldType } from './MahjongConsts';

export class YakuChecker {
    private readonly hand: PlayerHand;
    private readonly ctx: PlayerContext;
    private readonly blockedhaislists: BlockHaisList[];

    constructor(hand: PlayerHand, ctx: PlayerContext){
        this.hand = hand;
        this.ctx = ctx;
        this.blockedhaislists = new BlockDivider(this.hand.getTehai()).divide();
    }

    //役判定
    check(): Map<number, Map<string, number>> {
        const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();

        //面子構造に依存しない役の判定
        const flatYaku = new Map<string, number>();
        if(this.isTsuiso()) flatYaku.set("字一色", 0);
        if(this.isChinroto()) flatYaku.set("清老頭", 0);
        if(this.isRyuiso()) flatYaku.set("緑一色", 0);

        this.blockedhaislists.forEach((blocks, index) => {
            const yaku_map: Map<string, number> = new Map(flatYaku);

            if(this.isShosushi(blocks)) yaku_map.set("小四喜", 0);
            if(this.isDaisushi(blocks)) yaku_map.set("大四喜", 0);

            yaku_maps.set(index, yaku_map);
        })

        return yaku_maps;
    }

    private countWindBlocks(blockedhaislist: BlockHaisList) {
        const windNums = new Set([28,29,30,31]);
        const foundWinds = new Set<number>();
        let mentsuCount = 0;
        let jantoCount = 0;
        for(const blockhais of blockedhaislist){
            const id = blockhais.getHais()[0].getId();
            if(windNums.has(id)){
                foundWinds.add(id);
                if(blockhais.getType() === BlockType.KOTSU) mentsuCount++;
                if(blockhais.getType() === BlockType.JANTO) jantoCount++;
            }
        }
        for(const meld of this.hand.getFuro()){
            const id = meld.getHais()[0].getId();
            if(windNums.has(id)){
                //ポン、カンであれば面子としてカウント
                if(meld.getType() !== MeldType.CHI){
                    foundWinds.add(id);
                    mentsuCount++;
                }
            }
        }

        return {foundWinds, mentsuCount, jantoCount};
    }

    //小四喜
    private isShosushi(blockedhaislist: BlockHaisList): boolean {
        const {foundWinds, mentsuCount, jantoCount} = this.countWindBlocks(blockedhaislist);

        if(foundWinds.size !== 4) return false;

        return mentsuCount === 3 && jantoCount === 1;
    }
    //大四喜
    private isDaisushi(blockedhaislist: BlockHaisList): boolean {
        const {foundWinds, mentsuCount, jantoCount} = this.countWindBlocks(blockedhaislist);

        if(foundWinds.size !== 4) return false;

        return mentsuCount === 4 && jantoCount === 0;
    }

    //字一色
    private isTsuiso(): boolean {
        const allTiles = [
            ...this.hand.getTehai(),
            ...this.hand.getFuro().flatMap(m => m.getHais())
        ];

        return allTiles.every(h => h.isJihaiTile());
    }
    //清老頭
    private isChinroto(): boolean {
        const routouNums = new Set([1, 9]);

        const allTiles = [
            ...this.hand.getTehai(),
            ...this.hand.getFuro().flatMap(m => m.getHais())
        ];

        return allTiles.every(h => routouNums.has(h.num));
    }
    //緑一色
    private isRyuiso(): boolean {
        const greenNums = new Set([20, 21, 22, 24, 26, 33]);

        const allTiles = [
            ...this.hand.getTehai(),
            ...this.hand.getFuro().flatMap(m => m.getHais())
        ];

        return allTiles.every(h => greenNums.has(h.getId()));
    }
}