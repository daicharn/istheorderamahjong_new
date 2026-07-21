import { Hai } from './Hai';
import {BlockHais} from './BlockHais';
import {BlockHaisList} from './BlockHaisList';
import {BlockFinder} from './BlockFinder';

export class BlockDivider extends BlockFinder{
    constructor(hais: Hai[]){
        super(hais);
    }

    private removeHai(arr: Hai[], target: Hai) {
        const idx = arr.findIndex(h => h.getId() === target.getId());
        if(idx !== -1) arr.splice(idx, 1);
    }

    private dedupeBlockHais(blockhaislist: BlockHaisList[]): BlockHaisList[]{
        const order = {"JANTO": 0, "KOTSU": 1, "SHUNTSU": 2};
        const normalize = (blocks: BlockHaisList): string =>{
            const sorted = [...blocks].sort((a, b) => {
                const t = order[a.getType()] - order[b.getType()];
                if(t !== 0) return t;

                const aMin = Math.min(...a.getHais().map(h => h.getId()));
                const bMin = Math.min(...b.getHais().map(h => h.getId()));

                return aMin - bMin;
            });

            return sorted.map(b => `${b.getType()}:${b.getHais().map(h => h.getId()).join(",")}`).join("|");
        }
        
        const unique = new Map<string, BlockHaisList>();
        for(const blocks of blockhaislist){
            const key = normalize(blocks);
            if(!unique.has(key)){
                unique.set(key, blocks);
            }
        }

        return [...unique.values()];
    }

    divide(): BlockHaisList[]{
        const results: BlockHaisList[] = [];
        const arr_hai: Hai[] = this.hais.sort();
        const blockhaislist: BlockHaisList = new BlockHaisList();

        const dfs = (arr: Hai[], blocks: BlockHaisList) => {
            if(arr.length === 0 && blocks.isStandardHand(Math.floor(arr_hai.length / 3))){
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

                    blocks.push(new BlockHais("KOTSU", [first.clone(), first.clone(), first.clone()]));
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

                        blocks.push(new BlockHais("SHUNTSU", [first.clone(), h1.clone(), h2.clone()]));
                        dfs(next, blocks);
                        blocks.pop();
                    }
                }
            }
        };

        for(let i = 0; i < arr_hai.length; i++){
            const first = arr_hai[i];

            if(i > 0 && arr_hai[i].getId() === arr_hai[i - 1].getId()) continue;

            //雀頭の処理
            if(arr_hai.filter(h => h.getId() === first.getId()).length >= 2){
                const next = arr_hai.slice();
                this.removeHai(next, first);
                this.removeHai(next, first);

                blockhaislist.push(new BlockHais("JANTO", [first.clone(), first.clone()]));
                dfs(next, blockhaislist);
                blockhaislist.pop();
            }
        }

        return this.dedupeBlockHais(results);
    }
}