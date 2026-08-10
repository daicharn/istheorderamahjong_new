import { Hais } from "../modules/Hais";
import { BlockHaisList } from "../modules/BlockHaisList";
import { BlockDivider } from '../modules/BlockDivider';
import { MachiType } from "../modules/MahjongConsts";

function getBlockHaisList(haisNum: number[]): BlockHaisList[]{
    return new BlockDivider(new Hais(haisNum).getHais()).divide();
}
function getMachiTypeSet(haisNum: number[], haiId: number){
    const results = getBlockHaisList(haisNum);
    let resultMachiType: Set<MachiType> = new Set();
    if(results.length === 1) resultMachiType = results[0].calcMachiType(haiId);
    return resultMachiType;
}

test("tanki_1", () => {
    const resultMachiType = getMachiTypeSet([1,2,3,4,5,6,7,8,9,10,10,10,12,12], 12);

    const expected = new Set([MachiType.TANKI]);
    expect(resultMachiType).toEqual(expected);
});
test("shanpon_1", () => {
    const resultMachiType = getMachiTypeSet([1,2,3,4,5,6,7,8,9,10,10,10,12,12], 10);

    const expected = new Set([MachiType.SHANPON]);
    expect(resultMachiType).toEqual(expected);
});
test("ryanmen_1", () => {
    const resultMachiType = getMachiTypeSet([1,2,3,4,5,6,7,8,9,10,10,10,12,12], 1);

    const expected = new Set([MachiType.RYANMEN]);
    expect(resultMachiType).toEqual(expected);
});
test("penchan_1", () => {
    const resultMachiType = getMachiTypeSet([1,2,3,4,5,6,7,8,9,10,10,10,12,12], 3);

    const expected = new Set([MachiType.PENCHAN]);
    expect(resultMachiType).toEqual(expected);
});
test("penchan_2", () => {
    const resultMachiType = getMachiTypeSet([1,2,3,4,5,6,7,8,9,10,10,10,12,12], 7);

    const expected = new Set([MachiType.PENCHAN]);
    expect(resultMachiType).toEqual(expected);
});
test("kanchan_1", () => {
    const resultMachiType = getMachiTypeSet([1,2,3,4,5,6,7,8,9,10,10,10,12,12], 5);

    const expected = new Set([MachiType.KANCHAN]);
    expect(resultMachiType).toEqual(expected);
});