import { Hais } from "../modules/Hais";
import { PlayerHand } from "../modules/PlayerHand";
import { Melds } from "../modules/Melds";
import { PlayerContext } from "../modules/PlayerContext";
import { YakuChecker } from "../modules/YakuChecker";
import { BlockHaisList } from "../modules/BlockHaisList";
import {BlockDivider} from '../modules/BlockDivider';

function getBlockStrings(hais_num: number[]): string[]{
    const blocks: BlockHaisList[] = new BlockDivider(new Hais(hais_num).getHais()).divide();

    const blockedHaisStrings: string[] = [];
    for(let i = 0; i < blocks.length; i++){
        blockedHaisStrings.push(blocks[i].blockToString());
    }

    return blockedHaisStrings;
}

test("tehai_normal_1", () => {
    const results = getBlockStrings([1,1,1,1,2,2,2,2,3,3,3,3,4,4]);

    expect(results).toContain("[1,1],[1,2,3],[1,2,3],[2,3,4],[2,3,4]");
    expect(results).toContain("[4,4],[1,1,1],[1,2,3],[2,2,2],[3,3,3]");
    expect(results).toContain("[4,4],[1,2,3],[1,2,3],[1,2,3],[1,2,3]");
});
test("tehai_normal_2", () => {
    const results = getBlockStrings([1,1,1,2,2,2,3,3,3,4,4,4,5,5]);
    
    expect(results).toContain("[2,2],[1,1,1],[2,3,4],[3,4,5],[3,4,5]");
    expect(results).toContain("[5,5],[1,1,1],[2,2,2],[3,3,3],[4,4,4]");
    expect(results).toContain("[5,5],[1,2,3],[1,2,3],[1,2,3],[4,4,4]");
});
test("tehai_j1m3", () => {
    const results = getBlockStrings([1,1,2,2,2,3,3,3,4,4,4]);
    
    expect(results).toContain("[1,1],[2,2,2],[3,3,3],[4,4,4]");
    expect(results).toContain("[1,1],[2,3,4],[2,3,4],[2,3,4]");
    expect(results).toContain("[4,4],[1,2,3],[1,2,3],[2,3,4]");
});
test("tehai_j1m2", () => {
    const results = getBlockStrings([1,1,1,2,2,3,3,3]);
    
    expect(results).toContain("[2,2],[1,1,1],[3,3,3]");
});
test("tehai_j1m1", () => {
    const results = getBlockStrings([1,1,1,2,2]);
    
    expect(results).toContain("[2,2],[1,1,1]");
});
test("tehai_j1m0", () => {
    const results = getBlockStrings([1,1]);
    
    expect(results).toContain("[1,1]");
});
test("isolated_1", () => {
    const results = getBlockStrings([1,2,3,4,5,6,7,8,9,10,12,13,15,15]);
    
    expect(results).toEqual([]);
});
test("isolated_2", () => {
    const results = getBlockStrings([1,1,2]);
    
    expect(results).toEqual([]);
});