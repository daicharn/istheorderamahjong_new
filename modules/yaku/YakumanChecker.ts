import { YakuContext } from './YakuContext';
import { BlockHaisList } from '../BlockHaisList';
import { YakuCheckerBaseOld } from './YakuCheckerBaseOld';
import { BlockType, MeldType } from '../MahjongConsts';
import { MachiCalculator } from '../MachiCalculator';
import { YakumanCheckers } from './yakuman/index';

export class YakumanChecker extends YakuCheckerBaseOld{
    private readonly index: number;

    constructor(context: YakuContext, index: number){
        super(context, 0, 0);
        this.index = index;
    }

    //役判定
    check(): Map<string, number> {
        const yaku_map: Map<string, number> = new Map();
        /*
        for(const Checker of YakumanCheckers){
            const checker = new Checker(this.context, this.index);
            if(checker.check()) yaku_map.set(checker.getYakuName(), checker.getHansuu());
        }
        */
        
        const block: BlockHaisList = this.context.blocks[this.index];

        //面子構造に依存しない役の判定
        const flatYakus = [
            {check: this.isTsuiso, name: "字一色"},
            {check: this.isChinroto, name: "清老頭"},
            {check: this.isRyuiso, name: "緑一色"},
            {check: this.isSukantsu, name: "四槓子"},
        ];
        for(const y of flatYakus){
            if(y.check.call(this)) yaku_map.set(y.name, 0);
        }

        if(this.isChuren9()) yaku_map.set("純正九蓮宝燈", 0);
        else if(this.isChuren()) yaku_map.set("九蓮宝燈", 0);

        if(this.context.ctx.tenho) yaku_map.set("天和", 0);
        if(this.context.ctx.chiho) yaku_map.set("地和", 0);

        const yakus = [
            {check: this.isShosushi, name: "小四喜"},
            {check: this.isDaisushi, name: "大四喜"},
            {check: this.isDaisangen, name: "大三元"},
        ];
        for(const y of yakus){
            if(y.check.call(this, this.context.blocks[this.index])) yaku_map.set(y.name, 0);
        }

        if(this.isSuankoTanki(block)) yaku_map.set("四暗刻単騎", 0);
        else if(this.isSuanko(block)) yaku_map.set("四暗刻", 0);
        if(this.isKokushi13(block)) yaku_map.set("国士無双13面待ち", 0);
        else if(this.isKokushi(block)) yaku_map.set("国士無双", 0);

        return yaku_map;
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
        if(!this.isMenzen()) return false;

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
    //国士無双
    private isKokushi(blockedhaislist: BlockHaisList): boolean {
        if(!this.isMenzen()) return false;
        return blockedhaislist.getBlockHais().some(b => b.getType() === BlockType.KOKUSHI);
    }
    //国士無双13面待ち
    private isKokushi13(blockedhaislist: BlockHaisList): boolean {
        if (!this.isKokushi(blockedhaislist)) return false;

        const haisWithoutAgari = this.getHaisWithoutAgariHai();
        const machi = new MachiCalculator(haisWithoutAgari).calculate();

        return machi.length === 13;
    }
    //九蓮宝燈
    private isChuren(): boolean {
        if(!this.isChinitsu()) return false;
        if(!this.isMenzen()) return false;
        
        const count = new Array(9).fill(0);
        const hais = this.context.hais.map(h => h.clone());
        hais.forEach(h => count[h.num - 1]++);
        
        //1と9は3枚以上
        const hasEnoughTerminals = count[0] >= 3 && count[8] >= 3;
        if(!hasEnoughTerminals) return false;
        //2から8は1枚以上
        for(let i = 1; i <= 7; i++){
            if(count[i] < 1) return false;
        }

        return true;
    }
    //純正九蓮宝燈
    private isChuren9(): boolean {
        if(!this.isChuren()) return false;

        const haisWithoutAgari = this.getHaisWithoutAgariHai();
        const machi = new MachiCalculator(haisWithoutAgari).calculate();

        return machi.length === 9;
    }
    //四槓子
    private isSukantsu(): boolean {
        return this.countKantsu() === 4;
    }
}