import { Hai } from './Hai';
import { BlockHais } from './BlockHais';
import { BlockHaisList } from './BlockHaisList';
import { BlockType, PAI_TYPE_NUM } from './MahjongConsts';

export class BlockDivider{
    private readonly hais: Hai[];

    constructor(hais: Hai[]){
        this.hais = hais.map(h => h.clone()).sort((a, b) => a.getId() - b.getId());
    }

    private dedupeBlockHais(blockhaislist: BlockHaisList[]): BlockHaisList[]{
        const unique = new Map<string, BlockHaisList>();
        for(const blocks of blockhaislist){
            blocks.sort();
            const key = blocks.blockToString();
            if(!unique.has(key)){
                unique.set(key, blocks);
            }
        }

        return [...unique.values()];
    }

    //七対子の判定
    private getBlockHaisChitoi(counts: number[]): BlockHaisList{
        const haiNumsSet = [...new Set(this.hais.map(h => h.getId()))];
        const blockhaischitoi: BlockHaisList = new BlockHaisList();
        
        if(haiNumsSet.length === 7 && haiNumsSet.every(n => counts[n - 1] === 2)){
            for(const num of haiNumsSet){
                blockhaischitoi.push(new BlockHais([new Hai(num), new Hai(num)], BlockType.JANTO));
            }
        }

        return blockhaischitoi;
    }

    //国士無双の判定
    private getBlockHaisKokushi(): BlockHaisList{
        const haiNumsSet = [...new Set(this.hais.map(h => h.getId()))];
        const blockhaiskokushi: BlockHaisList = new BlockHaisList();
        if(this.hais.every(h => h.isYaochuHai()) && this.hais.length === 14 && haiNumsSet.length === 13){
            const haiskokushi: Hai[] = [];
            for(const hai of this.hais){
                haiskokushi.push(hai);
            }
            blockhaiskokushi.push(new BlockHais(haiskokushi, BlockType.KOKUSHI));
        }

        return blockhaiskokushi;
    }

    divide(): BlockHaisList[]{
        const results: BlockHaisList[] = [];
        const blockhaislist: BlockHaisList = new BlockHaisList();
        const counts: number[] = new Array(PAI_TYPE_NUM).fill(0);
        this.hais.forEach(h => counts[h.getId() - 1]++);

        if(this.hais.length > 14) return results;

        const dfs = (arr: number[], blocks: BlockHaisList) => {
            const expectedBlocks = Math.floor(this.hais.length / 3);
            if(blocks.length() === expectedBlocks + 1 && blocks.isStandardHand(expectedBlocks)){
                results.push(blocks.clone());
                return;
            }

            for(let j = 0; j < counts.length; j++){
                const count = arr[j];
                const hai = new Hai(j + 1);

                //刻子の処理
                if(count >= 3){
                    let next = [...arr];
                    next[j] -= 3;

                    blocks.push(new BlockHais([hai, hai, hai], BlockType.KOTSU));
                    dfs(next, blocks);
                    blocks.pop();
                }
                //順子の処理
                const hasTiles = arr[j] > 0 && arr[j + 1] > 0 && arr[j + 2] > 0;
                const isShuntsuCandidate = hai.isNumberHai() && hai.num <= 7;
                if(isShuntsuCandidate && hasTiles){
                    const h2 = new Hai(j + 2);
                    const h3 = new Hai(j + 3);

                    let next = [...arr];
                    next[j]--;
                    next[j + 1]--;
                    next[j + 2]--;

                    blocks.push(new BlockHais([hai, h2, h3], BlockType.SHUNTSU));
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
                let next = [...counts];
                next[firstid - 1] -= 2;

                blockhaislist.push(new BlockHais([this.hais[i].clone(), this.hais[i].clone()], BlockType.JANTO));
                dfs(next, blockhaislist);
                blockhaislist.pop();
            }
        }

        //七対子の判定
        const blockhaischitoi = this.getBlockHaisChitoi(counts);
        if(blockhaischitoi.length() > 0) results.push(blockhaischitoi);
        
        //国士無双の判定
        const blockhaiskokushi = this.getBlockHaisKokushi();
        if(blockhaiskokushi.length() > 0) results.push(blockhaiskokushi);

        return this.dedupeBlockHais(results);
    }
}