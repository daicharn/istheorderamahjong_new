import { YakuContext } from '../yaku/YakuContext';
import { FuCalculator } from './FuCalculator';
import { TensuuResult } from './TensuuResult';

export class TensuuCalculator{
    private readonly context: YakuContext;
    private readonly yaku: Map<string, number>;
    constructor(context: YakuContext, yaku: Map<string, number>){
        this.context = context;
        this.yaku = yaku;
    }

    calcBaseTensuu(han: number, fu: number): number{
        return Math.min(fu * Math.pow(2, han + 2), 2000);
    }

    calcRonTensuu(base: number, multi: number): number{
        return Math.ceil(base * multi / 100) * 100;
    }

    calcdividedTensuu(ronTensuu: number, divide: number){
        return Math.ceil(Math.floor(ronTensuu / divide) / 100) * 100;
    }

    calcTensuuFromFu(han: number, fu: number): TensuuResult{
        const base = this.calcBaseTensuu(han, fu);
        const ronOya = this.calcRonTensuu(base, 6);
        const ronKo = this.calcRonTensuu(base, 4);
        const tsumoOya = this.calcdividedTensuu(ronOya, 3);
        const tsumoKo = {oya: this.calcdividedTensuu(ronKo, 2), ko: this.calcdividedTensuu(ronKo, 4)};

        return new TensuuResult(base, ronOya, ronKo, tsumoOya, tsumoKo);
    }

    calc(){
        //const han = this.calcHonsuu();
        //const fu = new FuCalculator(this.context, this.yaku);
    }

    private calcHonsuu(): number{
        return [...this.yaku.values()].reduce((sum, val) => sum + val, 0);
    }
}