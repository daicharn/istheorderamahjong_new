import {BlockHais} from './BlockHais';
import { BlockType, MachiType } from './MahjongConsts';

export class BlockHaisList {
    private readonly blocks: BlockHais[] = [];

    constructor(blocks: BlockHais[] = []) {
        this.blocks = blocks;
    }

    [Symbol.iterator]() { return this.blocks[Symbol.iterator](); }

    push(b: BlockHais) {
         this.blocks.push(b);
    }
    pop() { 
        return this.blocks.pop(); 
    }
    length() {
        return this.blocks.length;
    }

    count(type: BlockType): number{
        return this.blocks.filter(b => b.getType() == type).length;
    }

    isStandardHand(mentsu: number){
        return this.count(BlockType.JANTO) === 1 && (this.count(BlockType.KOTSU) + this.count(BlockType.SHUNTSU)) === mentsu;
    }

    blockToString(): string {
        return this.blocks.map(b => `[${b.getHais().map(h => h.getId()).join(",")}]`).join(",");
    }

    sort(){
        this.blocks.sort((a, b) => {
            //JANTOのみを先頭に移動する
            if(a.getType() === BlockType.JANTO && b.getType() !== BlockType.JANTO) return -1;
            if(b.getType() === BlockType.JANTO && a.getType() !== BlockType.JANTO) return 1;

            //JANTO以外は辞書順でソート
            const aIds = a.getHais().map(h => h.getId()).sort((x, y) => x - y);
            const bIds = b.getHais().map(h => h.getId()).sort((x, y) => x - y);

            const len = Math.min(aIds.length, bIds.length);
            for (let i = 0; i < len; i++) {
                const diff = aIds[i] - bIds[i];
                if (diff !== 0) return diff;
            }

            return aIds.length - bIds.length;
        });
    }

    calcMachiType(haiId: number): Set<MachiType> {
        const machiTypeSet = new Set<MachiType>();
        for(const block of this.blocks){
            if(!block.containsHai(haiId)) continue;

            switch(block.getType()){

                case BlockType.JANTO:
                    machiTypeSet.add(MachiType.TANKI);
                    break;

                case BlockType.KOTSU:
                    machiTypeSet.add(MachiType.SHANPON);
                    break;
                
                case BlockType.SHUNTSU:
                    const min = block.minHai;
                    const max = block.maxHai;
                    const haiNum = haiId % 9;

                    if((min.num === 1 && haiNum === 3)|| (min.num === 7 && haiNum === 7)){
                        machiTypeSet.add(MachiType.PENCHAN);
                        continue;
                    }
                    if(haiId === min.getId() + 1){
                        machiTypeSet.add(MachiType.KANCHAN);
                        continue;
                    }
                    if(haiId === min.getId() || haiId === max.getId()) machiTypeSet.add(MachiType.RYANMEN);
                    
                    break;
            }
        }
        return machiTypeSet;
    }

    getBlockHais(): BlockHais[] {
        return this.blocks;
    }

    clone(): BlockHaisList {
        return new BlockHaisList(this.blocks.map(b => b.clone()));
    }
}