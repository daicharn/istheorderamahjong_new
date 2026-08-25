import { BlockHais } from '../BlockHais';
import { BlockType, MachiType, MeldType } from '../MahjongConsts';
import { MentsuAnalyzer } from '../MentsuAnalyzer';
import { YakuContext } from '../yaku/YakuContext';
import { FuDetail } from './FuDetail';

type MentsuFuSpec = {
    yaochu: {name: string, fu: number};
    chuchan: {name: string, fu: number};
};

const MENTSU_FU_TABLE: Record<string, MentsuFuSpec> = {
        [BlockType.KOTSU]: {
            yaochu: {name: "么九牌暗刻", fu: 8},
            chuchan: {name: "中張牌暗刻", fu: 4}
        },
        [MeldType.PON]: {
            yaochu: {name: "么九牌明刻", fu: 4},
            chuchan: {name: "中張牌明刻", fu: 2}
        },
        [MeldType.MINKAN]: {
            yaochu: {name: "么九牌明槓", fu: 16},
            chuchan: {name: "中張牌明槓", fu: 8}
        },
        [MeldType.ANKAN]: {
            yaochu: {name: "么九牌暗槓", fu: 32},
            chuchan: {name: "中張牌暗槓", fu: 16}
        }
    } as const;

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
            const table = MENTSU_FU_TABLE[m.getType()];
            if(!table) continue;

            const key = m.minHai.isYaochuHai() ? "yaochu" : "chuchan";
            const spec = table[key];
            
            MentsuFu.push(new FuDetail(spec.name, spec.fu, m));
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