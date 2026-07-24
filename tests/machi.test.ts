import { Hais } from '../modules/Hais';
import { MachiCalculator } from '../modules/MachiCalculator';

function getMachi(hais_num: number[]): number[] {
    return new MachiCalculator(new Hais(hais_num).getHais()).calculate();
}
//4枚使いの待ちを削除する
function removeFour(hais: number[], results: number[]): number[]{ 
    return results.filter(n => hais.filter(hn => hn === n).length !== 4);
}

test("machi_9men", () => {
    const hais = [1,1,1,2,3,4,5,6,7,8,9,9,9];
    const results = removeFour(hais, getMachi(hais));

    const expected = [1,2,3,4,5,6,7,8,9];
    expect(results).toEqual(expected);
});
test("machi_8men_1", () => {
    const hais = [1,1,1,2,2,2,3,4,5,6,7,7,7];
    const results = removeFour(hais, getMachi(hais));

    const expected = [1,2,3,4,5,6,7,8];
    expect(results).toEqual(expected);
});
test("machi_8men_2", () => {
    const hais = [1,1,1,2,3,4,5,6,6,6,6,7,8];
    const results = removeFour(hais, getMachi(hais));

    const expected = [1,2,3,4,5,7,8,9];

    expect(results).toEqual(expected);
});
test("machi_8men_3", () => {
    const hais = [1,1,1,3,3,3,4,5,6,7,8,8,8];
    const results = removeFour(hais, getMachi(hais));

    const expected = [2,3,4,5,6,7,8,9];

    expect(results).toEqual(expected);
});
test("machi_7men_1", () => {
    const hais = [1,1,2,2,2,3,3,3,4,5,6,6,6];
    const results = removeFour(hais, getMachi(hais));

    const expected = [1,2,3,4,5,6,7];

    expect(results).toEqual(expected);
});
test("machi_7men_2", () => {
    const hais = [2,2,2,3,4,5,6,6,6,7,7,8,8];
    const results = removeFour(hais, getMachi(hais));

    const expected = [1,3,4,6,7,8,9];

    expect(results).toEqual(expected);
});
test("machi_7men_3", () => {
    const hais = [2,3,3,4,4,5,5,5,5,6,7,7,7];
    const results = removeFour(hais, getMachi(hais));

    const expected = [1,2,3,4,6,7,8];

    expect(results).toEqual(expected);
});

