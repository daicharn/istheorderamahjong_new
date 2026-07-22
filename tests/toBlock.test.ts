import { Hais } from "../modules/Hais";
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

    const expected = new Set([
        "[4,4],[1,1,1],[1,2,3],[2,2,2],[3,3,3]",
        "[4,4],[1,2,3],[1,2,3],[1,2,3],[1,2,3]",
        "[1,1],[1,2,3],[1,2,3],[2,3,4],[2,3,4]"
    ]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_normal_2", () => {
    const results = getBlockStrings([1,1,1,2,2,2,3,3,3,4,4,4,5,5]);

    const expected = new Set([
        "[2,2],[1,1,1],[2,3,4],[3,4,5],[3,4,5]",
        "[5,5],[1,1,1],[2,2,2],[3,3,3],[4,4,4]",
        "[5,5],[1,1,1],[2,3,4],[2,3,4],[2,3,4]",
        "[5,5],[1,2,3],[1,2,3],[1,2,3],[4,4,4]"
    ]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_j1m3", () => {
    const results = getBlockStrings([1,1,2,2,2,3,3,3,4,4,4]);
    
    const expected = new Set([
        "[1,1],[2,2,2],[3,3,3],[4,4,4]",
        "[1,1],[2,3,4],[2,3,4],[2,3,4]",
        "[4,4],[1,2,3],[1,2,3],[2,3,4]"
    ]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_j1m2", () => {
    const results = getBlockStrings([1,1,1,2,2,3,3,3]);

    const expected = new Set(["[2,2],[1,1,1],[3,3,3]"]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_j1m1", () => {
    const results = getBlockStrings([1,1,1,2,2]);

    const expected = new Set(["[2,2],[1,1,1]"]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_j1m0", () => {
    const results = getBlockStrings([1,1]);
    
    const expected = new Set(["[1,1]"]);
    expect(new Set(results)).toEqual(expected);
});
test("isolated_1", () => {
    const results = getBlockStrings([1,2,3,4,5,6,7,8,9,10,12,13,15,15]);
    
    expect(results).toEqual([]);
});
test("isolated_2", () => {
    const results = getBlockStrings([1,1,2]);
    
    expect(results).toEqual([]);
});
test("tehai_sort_1", () => {
    const results = getBlockStrings([15,15,12,11,10,9,8,7,6,5,4,3,2,1]);
    
    const expected = new Set(["[15,15],[1,2,3],[4,5,6],[7,8,9],[10,11,12]"]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_sort_2", () => {
    const results = getBlockStrings([3,9,1,4,11,6,15,8,2,10,5,12,7,15]);
    
    const expected = new Set(["[15,15],[1,2,3],[4,5,6],[7,8,9],[10,11,12]"]);
    expect(new Set(results)).toEqual(expected);
});
test("tehai_jihai_1", () => {
    const results = getBlockStrings([28,28,29,29,29,30,30,30,31,31,31,32,32,32]);
    
    const expected = new Set(["[28,28],[29,29,29],[30,30,30],[31,31,31],[32,32,32]"]);
    expect(new Set(results)).toEqual(expected);
});