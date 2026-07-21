import {BlockHais} from './BlockHais';

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

    count(type: BlockHais["type"]): number{
        return this.blocks.filter(b => b.getType() == type).length;
    }

    isStandardHand(mentsu: number){
        return this.count("JANTO") === 1 && (this.count("KOTSU") + this.count("SHUNTSU")) === mentsu;
    }

    blockToString(): string {
        return this.blocks.map(b => `[${b.getHais().map(h => h.getId()).join(",")}]`).join(",");
    }

    sort(){
        this.blocks.sort((a, b) => {
            //JANTOのみを先頭に移動する
            if(a.getType() === "JANTO" && b.getType() !== "JANTO") return -1;
            if(b.getType() === "JANTO" && a.getType() !== "JANTO") return 1;

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

    getBlockHais(): BlockHais[] {
        return this.blocks;
    }

    clone(): BlockHaisList {
        return new BlockHaisList(this.blocks.map(b => b.clone()));
    }
}