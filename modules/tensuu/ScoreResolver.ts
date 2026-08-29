import { YakuContext } from '../yaku/YakuContext';
import { TensuuCalculator } from './TensuuCalculator';
import { FuCalculator } from './FuCalculator';
import { FuDetail } from './FuDetail';
import { ScoreResult } from './ScoreResult';

export class ScoreResolver{
    private readonly context: YakuContext;
    private readonly yaku: Map<string, number>;
    constructor(context: YakuContext, yaku: Map<string, number>){
        this.context = context;
        this.yaku = yaku;
    }

    private calcHonsuu(): number{
        return [...this.yaku.values()].reduce((sum, val) => sum + val, 0);
    }

    private countFusuu(detail: FuDetail[]): number{
        return detail.reduce((sum, val) => sum + val.fu, 0);
    }

    private ceilFusuu(fu: number): number{
        return fu === 25 ? 25 : Math.ceil(fu / 10) * 10;
    }

    resolve(){
        const han = this.calcHonsuu();
        const fuDetail = new FuCalculator(this.context, this.yaku).calcFu();
        const fuBasic = this.countFusuu(fuDetail);
        const fuCeiled = this.ceilFusuu(fuBasic);
        const tensuu = TensuuCalculator.calcTensuu(han, fuCeiled);
        return new ScoreResult(han, fuBasic, fuCeiled, tensuu, fuDetail);
    }
}