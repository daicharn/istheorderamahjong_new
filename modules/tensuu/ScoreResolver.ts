import { YakuContext } from '../yaku/YakuContext';
import { TensuuCalculator } from './TensuuCalculator';
import { FuCalculator } from './FuCalculator';
import { FuDetail } from './FuDetail';

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

    resolve(){
        const han = this.calcHonsuu();
        const fuDetail = new FuCalculator(this.context, this.yaku).calcFu();
        const fu = this.countFusuu(fuDetail);
        const tensuu = TensuuCalculator.calcTensuu(han, fu);

        return {han, fu, tensuu, fuDetail};
    }
}