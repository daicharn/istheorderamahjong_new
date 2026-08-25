import { BlockHais } from '../BlockHais';
import { BlockType, MachiType, MeldType } from '../MahjongConsts';
import { MentsuAnalyzer } from '../MentsuAnalyzer';
import { YakuContext } from '../yaku/YakuContext';
import { FuDetail } from './FuDetail';

export class FuCalculator{
    private readonly context: YakuContext;
    private readonly yaku: Map<string, number>;
    constructor(context: YakuContext, yaku: Map<string, number>){
        this.context = context;
        this.yaku = yaku;
    }

    private calcSpecialFu(): FuDetail | null{
        if(this.yaku.has("平和") && this.context.ctx.isTsumo) return new FuDetail("平和ツモ", 20);
        if(this.yaku.has("七対子")) return new FuDetail("七対子", 25);

        return null;
    }

    private calcBaseFu(): FuDetail[]{
        const baseFu: FuDetail[] = [new FuDetail("符底", 20)];
        const isTsumo = this.context.ctx.isTsumo;

        if(isTsumo) baseFu.push(new FuDetail("ツモ", 2));
        if(!isTsumo && this.context.hand.isMenzen()) baseFu.push(new FuDetail("面前ロン", 10));
        
        return baseFu;
    }

    private calcMachuFu(): FuDetail[]{
        const machiFu: FuDetail[] = [];
        const machiType = this.calcMachiType();
        if(machiType.has(MachiType.TANKI)) machiFu.push(new FuDetail("単騎待ち", 2));
        else if(machiType.has(MachiType.KANCHAN)) machiFu.push(new FuDetail("嵌張待ち", 2));
        else if(machiType.has(MachiType.PENCHAN)) machiFu.push(new FuDetail("辺張待ち", 2));

        return machiFu;
    }

    private calcJantoFu(analyzer: MentsuAnalyzer): FuDetail[]{
        const JantoFu: FuDetail[] = [];
        const pw = this.context.ctx.playerWind;
        const rw = this.context.ctx.roundWind;
        const hasYakuhaiJanto = analyzer.hasYakuhaiMentsu(m => m instanceof BlockHais && m.isJanto(), pw, rw);
        
        if(!hasYakuhaiJanto) return JantoFu;
        
        for(const m of analyzer.getAll()){
            if(m.getType() === BlockType.JANTO){
                JantoFu.push(new FuDetail("役牌雀頭", 2, m));
            }
        }

        return JantoFu;
    }

    private calcMentsuFu(analyzer: MentsuAnalyzer): FuDetail[]{
        const MentsuFu: FuDetail[] = [];

        for(const m of analyzer.getAll()){
            const isYaochu = m.minHai.isYaochuHai();

            if(m.getType() === BlockType.KOTSU){
                MentsuFu.push(new FuDetail(
                    isYaochu ? "么九牌暗刻" : "中張牌暗刻",
                    isYaochu ? 8 : 4,
                    m
                ));
            }
            if(m.getType() === MeldType.PON){
                MentsuFu.push(new FuDetail(
                    isYaochu ? "么九牌明刻" : "中張牌明刻",
                    isYaochu ? 4 : 2,
                    m
                ));
            }
            if(m.getType() === MeldType.MINKAN){
                MentsuFu.push(new FuDetail(
                    isYaochu ? "么九牌明槓" : "中張牌明槓",
                    isYaochu ? 16 : 8,
                    m
                ));
            }
            if(m.getType() === MeldType.ANKAN){
                MentsuFu.push(new FuDetail(
                    isYaochu ? "么九牌暗槓" : "中張牌暗槓",
                    isYaochu ? 32 : 16,
                    m
                ));
            }
        }

        return MentsuFu;
    }

    calcFu(): FuDetail[]{
        const special = this.calcSpecialFu();
        if(special) return [special];

        const analyzer = new MentsuAnalyzer(this.context.block.getBlockHais(), this.context.melds);

        return [
            ...this.calcBaseFu(),
            ...this.calcMachuFu(),
            ...this.calcJantoFu(analyzer),
            ...this.calcMentsuFu(analyzer),
        ];
    }

    private calcMachiType(): Set<MachiType>{
        const agariHaiId = this.context.ctx.agariHai.getId();
        return this.context.block.calcMachiType(agariHaiId);
    }
}