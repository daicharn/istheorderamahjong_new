export class TensuuResult{
    public readonly base: number;
    public readonly ronOya: number;
    public readonly ronKo: number;
    public readonly tsumoOya: number;
    public readonly tsumoKo: {oya: number, ko: number};

    constructor(
        base: number,
        ronOya: number,
        ronKo: number,
        tsumoOya: number,
        tsumoKo: {oya: number, ko: number}
    ){
        this.base = base;
        this.ronOya = ronOya;
        this.ronKo = ronKo;
        this.tsumoOya = tsumoOya;
        this.tsumoKo = tsumoKo;
    }
}