import { Hai } from './Hai';
import { BlockHais } from './BlockHais';
import { BlockHaisList } from './BlockHaisList';
import { BlockType, PAI_TYPE_NUM } from './MahjongConsts';

export class BlockDivider{
    private readonly hais: Hai[];

    constructor(hais: Hai[]){
        this.hais = hais.map(h => h.clone()).sort((a, b) => a.getId() - b.getId());
    }

    protected removeHai(arr: Hai[], target: Hai) {
            const idx = arr.findIndex(h => h.getId() === target.getId());
            if(idx !== -1) arr.splice(idx, 1);
    }

    private dedupeBlockHais(blockhaislist: BlockHaisList[]): BlockHaisList[]{
        const unique = new Map<string, BlockHaisList>();
        for(const blocks of blockhaislist){
            blocks.sort();
            const key = [...blocks].map(b => `${b.getType()}:${b.getHais().map(h => h.getId()).join(",")}`).join("|");
            if(!unique.has(key)){
                unique.set(key, blocks);
            }
        }

        return [...unique.values()];
    }

    divide(): BlockHaisList[]{
        const results: BlockHaisList[] = [];
        const blockhaislist: BlockHaisList = new BlockHaisList();
        const counts: number[] = new Array(PAI_TYPE_NUM).fill(0);
        this.hais.forEach(h => counts[h.getId() - 1]++);

        if(this.hais.length > 14) return results;

        const dfs = (arr: number[], blocks: BlockHaisList) => {
            if(arr.every(n => n === 0) && blocks.isStandardHand(Math.floor(this.hais.length / 3))){
                results.push(blocks.clone());
                return;
            }

            for(let j = 0; j < counts.length; j++){
                const first = counts[j];
                const firsthai = new Hai(first);

                //刻子の処理
                if(first >= 3){
                    const next = [...arr];
                    next[j] -= 3;

                    blocks.push(new BlockHais(BlockType.KOTSU, [firsthai, firsthai, firsthai]));
                    dfs(next, blocks);
                    blocks.pop();
                }
                //順子の処理
                if(counts[j] > 0 && counts[j + 1] > 0 && counts[j + 2] > 0 && firsthai.isNumberTile() && firsthai.num <= 7){
                    const h1 = new Hai(first + 1);
                    const h2 = new Hai(first + 2);

                    const next = [...arr];
                    next[j]--;
                    next[j + 1]--;
                    next[j + 2]--;

                    blocks.push(new BlockHais(BlockType.SHUNTSU, [firsthai, h1, h2]));
                    dfs(next, blocks);
                    blocks.pop();
                }
            }
        };

        //通常の面子の組み合わせの判定
        for(let i = 0; i < this.hais.length; i++){
            const firstid = this.hais[i].getId();

            if(i > 0 && this.hais[i].getId() === this.hais[i - 1].getId()) continue;

            //雀頭の処理
            if(this.hais.filter(h => h.getId() === firstid).length >= 2){
                const next = [...counts];
                next[firstid - 1]--;

                blockhaislist.push(new BlockHais(BlockType.JANTO, [this.hais[i].clone(), this.hais[i].clone()]));
                dfs(next, blockhaislist);
                blockhaislist.pop();
            }
        }

        //七対子の判定
        const haiNumsSet = [...new Set(this.hais.map(h => h.getId()))];
        if(haiNumsSet.length === 7 && haiNumsSet.every(n => this.hais.filter(h => h.getId() == n).length == 2)){
            const blockhaisChitoi: BlockHaisList = new BlockHaisList();
            for(const num of haiNumsSet){
                blockhaisChitoi.push(new BlockHais(BlockType.JANTO, [new Hai(num), new Hai(num)]));
            }

            results.push(blockhaisChitoi)
        }

        return this.dedupeBlockHais(results);
    }
}