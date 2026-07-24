import { Hais } from '../modules/Hais';
import { MachiCalculator } from '../modules/MachiCalculator';
import { casesChinitsu } from './machi/chinitsu';
import { casesChitoitsu } from './machi/chitoitsu';

type MachiCase = {
    name: string,
    hais: number[],
    expected: number[]
};

function getMachi(hais_num: number[]): number[] {
    return new MachiCalculator(new Hais(hais_num).getHais()).calculate();
};
//4枚使いの待ちを削除する
function removeFour(hais: number[], results: number[]): number[]{ 
    return results.filter(n => hais.filter(hn => hn === n).length !== 4);
};

const testcases: Map<string, MachiCase[]> = new Map();
testcases.set("清一色", casesChinitsu);
testcases.set("七対子", casesChitoitsu);

testcases.forEach((value, key) => {
    describe(key, () => {
        test.each(value)('$name', ({hais, expected}) => {
            const results = removeFour(hais, getMachi(hais));
            expect(results).toEqual(expected);
        });
    });
})
