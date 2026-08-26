import { TensuuResult } from './TensuuResult';

export class TensuuCalculator{
    static readonly BASE_LIMITS = [
        {han: 26, base: 16000 },
        {han: 13, base: 8000 },
        {han: 11, base: 6000 },
        {han: 8,  base: 4000 },
        {han: 6,  base: 3000 },
        {han: 5,  base: 2000 },
    ];

    static calcBaseTensuu(han: number, fu: number): number{
        return Math.min(fu * Math.pow(2, han + 2), 2000);
    }

    static calcRonTensuu(base: number, multi: number): number{
        return Math.ceil(base * multi / 100) * 100;
    }

    static calcdividedTensuu(ronTensuu: number, divide: number){
        return Math.ceil(Math.floor(ronTensuu / divide) / 100) * 100;
    }

    static calcTensuuFromBase(base: number): TensuuResult{
        const ronOya = this.calcRonTensuu(base, 6);
        const ronKo = this.calcRonTensuu(base, 4);
        const tsumoOya = this.calcdividedTensuu(ronOya, 3);
        const tsumoKo = {oya: this.calcdividedTensuu(ronKo, 2), ko: this.calcdividedTensuu(ronKo, 4)};

        return new TensuuResult(base, ronOya, ronKo, tsumoOya, tsumoKo);
    }

    static calcTensuu(han: number, fu: number): TensuuResult{
        for(const limit of this.BASE_LIMITS){
            if(han >= limit.han) return this.calcTensuuFromBase(limit.base);
        }
        return this.calcTensuuFromBase(this.calcBaseTensuu(han, fu));
    } 
}