import { Hai } from './Hai';
import { BlockHais } from './BlockHais';
import { BlockHaisList } from './BlockHaisList';
import { BlockType } from './MahjongConsts';

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

        if(this.hais.length > 14) return results;

        const dfs = (arr: Hai[], blocks: BlockHaisList) => {
            if(arr.length === 0 && blocks.isStandardHand(Math.floor(this.hais.length / 3))){
                results.push(blocks.clone());
                return;
            }

            for(let j = 0; j < arr.length; j++){
                const first = arr[j];

                //刻子の処理
                if(arr.filter(h => h.getId() === first.getId()).length >= 3){
                    const next = arr.slice();
                    this.removeHai(next, first);
                    this.removeHai(next, first);
                    this.removeHai(next, first);

                    blocks.push(new BlockHais(BlockType.KOTSU, [first.clone(), first.clone(), first.clone()]));
                    dfs(next, blocks);
                    blocks.pop();
                }
                //順子の処理
                if(first.isNumberTile() && first.num <= 7){
                    const id1 = first.getId() + 1;
                    const id2 = first.getId() + 2;

                    const h1 = arr.find(h => h.getId() === id1);
                    const h2 = arr.find(h => h.getId() === id2);

                    if(h1 && h2){
                        const next = arr.slice();
                        this.removeHai(next, first);
                        this.removeHai(next, h1);
                        this.removeHai(next, h2);

                        blocks.push(new BlockHais(BlockType.SHUNTSU, [first.clone(), h1.clone(), h2.clone()]));
                        dfs(next, blocks);
                        blocks.pop();
                    }
                }
            }
        };

        //通常の面子の組み合わせの判定
        for(let i = 0; i < this.hais.length; i++){
            const first = this.hais[i];

            if(i > 0 && this.hais[i].getId() === this.hais[i - 1].getId()) continue;

            //雀頭の処理
            if(this.hais.filter(h => h.getId() === first.getId()).length >= 2){
                const next = this.hais.slice();
                this.removeHai(next, first);
                this.removeHai(next, first);

                blockhaislist.push(new BlockHais(BlockType.JANTO, [first.clone(), first.clone()]));
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