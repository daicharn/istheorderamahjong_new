import { FuDetail } from "./FuDetail";
import { TensuuResult } from "./TensuuResult";

export class ScoreResult{
    public readonly han: number;
    public readonly fuBasic: number;
    public readonly fuCeiled: number;
    public readonly tensuu: TensuuResult;
    public readonly fuDetail: FuDetail[];

    constructor(
        han: number,
        fuBasic: number,
        fuCeiled: number,
        tensuu: TensuuResult,
        fuDetail: FuDetail[]
    ){
        this.han = han;
        this.fuBasic = fuBasic;
        this.fuCeiled = fuCeiled;
        this.tensuu = tensuu;
        this.fuDetail = fuDetail;
    }
}