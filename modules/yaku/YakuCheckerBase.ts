import { Hai } from '../Hai';
import { YakuContext } from './YakuContext';
import { BlockHaisList } from '../BlockHaisList';
import { MachiCalculator } from '../MachiCalculator';
import { IMentsu } from '../IMentsu';
import { BlockType, MeldType } from '../MahjongConsts';

export abstract class YakuCheckerBase {
    protected readonly context: YakuContext;
    protected hanMenzen: number;
    protected hanFuro: number;
    protected abstract yakuName: string;
    
    constructor(context: YakuContext){
        this.context = context;
        this.hanMenzen = 0;
        this.hanFuro = 0;
    }

    protected abstract isSatisfied(): boolean;

    public check(): boolean {
        return this.isSatisfied();
    }

    public getHan(): number {
        return this.isMenzen() ? this.hanMenzen : this.hanFuro;
    }

    public getName(): string {
        return this.yakuName;
    }

    //アガリ牌を除いた手牌の待ちの数を計算する
    protected calculateMachiCount(): number {
        const haisWithoutAgari = this.getHaisWithoutAgariHai();
        const machi = new MachiCalculator(haisWithoutAgari).calculate();
        return machi.length;
    }

    //手牌と鳴き牌を含めた面子のコピー配列を作成
    protected getAllMentsu(): IMentsu[] {
        return [...this.context.block, ...this.context.melds];
    }

    //手牌と鳴き牌を含めた牌のコピー配列を作成
    protected getAllTiles(): Hai[] {
        const hais = this.context.hais.map(h => h.clone());
        const meldHais = this.context.melds.flatMap(m => m.getHais().map(h => h.clone()));
        return [...hais, ...meldHais];
    }

    //全く同じ順子のグループ数を数える
    protected countSameShuntsuGroups(): number {
        const groups = this.getGroupsMentsu(
            (m) => m.isShuntsu(),
            (m) => `${m.minHai.getId()}-${m.maxHai.getId()}`
        );
        let count = 0;
        for(const group of groups.values()){
            if(group.length >= 2){
                count += Math.floor(group.length / 2);
            }
        }
        return count;
    }

    //面子ごとにグループを作成する
    protected getGroupsMentsu(
        filter: (m: IMentsu) => boolean,
        keySelector: (m: IMentsu) => string
    ): Map<string, IMentsu[]> {
        const mentsuList: IMentsu[] = this.getAllMentsu();
        const filteredMentsu = mentsuList.filter(filter);
        const groups = new Map<string, IMentsu[]>();
        for(const mentsu of filteredMentsu){
            const key = keySelector(mentsu);
            if(!groups.has(key)){
                groups.set(key, []);
            }
            groups.get(key)?.push(mentsu);
        }
        return groups;
    }

    //指定された牌の数を手牌と鳴き牌から数える
    protected countTargetBlocks(blockedhaislist: BlockHaisList, target: number[]) {
        const targetNums = new Set(target);
        const foundTargets = new Set<number>();
        let mentsuCount = 0;
        let jantoCount = 0;
        for(const blockhais of blockedhaislist){
            const id = blockhais.getHais()[0].getId();
            if(targetNums.has(id)){
                foundTargets.add(id);
                if(blockhais.getType() === BlockType.KOTSU) mentsuCount++;
                if(blockhais.getType() === BlockType.JANTO) jantoCount++;
            }
        }
        for(const meld of this.context.melds){
            const id = meld.getHais()[0].getId();
            if(targetNums.has(id)){
                //ポン、カンであれば面子としてカウント
                if(meld.getType() !== MeldType.CHI){
                    foundTargets.add(id);
                    mentsuCount++;
                }
            }
        }

        return {foundTargets, mentsuCount, jantoCount};
    }

    //暗刻の数を数える
    protected countAnko(): number {
        let ankoCount = 0;
        for(const blockhais of this.context.block){
            if(blockhais.getType() === BlockType.KOTSU){
                //ロンであり刻子にアガリ牌が含まれている場合暗刻として認めない
                if(!this.context.ctx.isTsumo && blockhais.getHais().some(h => h.getId() == this.context.ctx.agariHai.getId())) continue;
                ankoCount++;
            }
        }
        for(const meld of this.context.melds){
            if(meld.getType() === MeldType.ANKAN) ankoCount++;
        }
        
        return ankoCount;
    }

    //刻子の数を数える
    protected countKotsu(): number {
        let kotsuCount = 0;
        const allMentsu: IMentsu[] = [...this.context.block, ...this.context.melds];

        allMentsu.forEach(mentsu => {
            if(mentsu.isKotsuOrKantsu()) kotsuCount++;
        });

        return kotsuCount;
    }

    //槓子の数を数える
    protected countKantsu() {
        let kantsuCount = 0;
        for(const meld of this.context.melds){
            if(meld.getType() === MeldType.ANKAN || meld.getType() === MeldType.MINKAN) kantsuCount++;
        }

        return kantsuCount;
    }

    //面前かどうか
    protected isMenzen() {
        return this.context.melds.every(meld => meld.getType() === MeldType.ANKAN);
    }

    //アガリ牌を除いた手牌のコピーを作成
    protected getHaisWithoutAgariHai(): Hai[] {
        const hais = this.context.hais.map(h => h.clone());
        const agariId = this.context.ctx.agariHai.getId();
        const index = this.context.hais.findIndex(h => h.getId() === agariId);
        hais.splice(index, 1);

        return hais;
    }
}