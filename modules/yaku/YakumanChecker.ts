import { YakuContext } from './YakuContext';
import { BlockHaisList } from '../BlockHaisList';
import { YakuCheckerBaseOld } from './YakuCheckerBaseOld';
import { BlockType, MeldType } from '../MahjongConsts';
import { MachiCalculator } from '../MachiCalculator';
import { YakumanCheckers } from './index';

export class YakumanChecker extends YakuCheckerBaseOld{
    private readonly index: number;

    constructor(context: YakuContext, index: number){
        super(context, 0, 0);
        this.index = index;
    }

    //役判定
    check(): Map<string, number> {
        const excludes = [
            { main: "純正九蓮宝燈", sub: "九蓮宝燈"},
            { main: "四暗刻単騎", sub: "四暗刻"},
            { main: "国士無双13面待ち", sub: "国士無双"},
        ];
        const yaku_map: Map<string, number> = new Map();
        for(const Checker of YakumanCheckers) {
            const checker = new Checker(this.context, this.index);
            if(checker.check()) yaku_map.set(checker.getName(), checker.getHan());
        }

        for(const { main, sub } of excludes) {
            if(yaku_map.has(main)) yaku_map.delete(sub);
        }

        const block: BlockHaisList = this.context.blocks[this.index];

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
}