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

    clone(): BlockHaisList {
        return new BlockHaisList(this.blocks.map(b => b.clone()));
    }
}