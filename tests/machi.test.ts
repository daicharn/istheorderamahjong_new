import { Hai } from '../modules/Hai';
import { Hais } from '../modules/Hais';
import { MachiCalculator } from '../modules/MachiCalculator';
import { PAI_TYPE_NUM } from '../modules/MahjongConsts';
import { casesChinitsu } from './machi/chinitsu';
import { casesChitoitsu } from './machi/chitoitsu';
import { casesKokushi } from './machi/kokushi';
import { BlockHaisList } from "../modules/BlockHaisList";
import { BlockDivider } from '../modules/BlockDivider';
import { casesMaisuu } from './machi/maisuu';

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

function generateRandomTehai(mentsunum: number): number[] {
    let tehainum: number[] = new Array(PAI_TYPE_NUM).fill(4);
    const ids: number[] = Array.from({ length: PAI_TYPE_NUM }, (_, i) => i + 1);
    const tehai: number[] = [];
    const jantohai = Math.floor(Math.random() * tehainum.length);

    //雀頭
    tehainum[jantohai] -= 2;
    tehai.push(jantohai + 1, jantohai + 1);
    //面子
    for(let i = 0; i < mentsunum; i++){
        //順子
        if(Math.random() < 0.5){
            const candidate_shuntsu = ids.filter(id => {
                const hai = new Hai(id);
                return hai.isNumberHai() && hai.num <= 7 && 
                    tehainum[id - 1] >= 1 &&
                    tehainum[id] >= 1 &&
                    tehainum[id + 1] >= 1
            });
            const shuntsuhai = candidate_shuntsu[Math.floor(Math.random() * candidate_shuntsu.length)];
            tehainum[shuntsuhai - 1]--;
            tehainum[shuntsuhai]--;
            tehainum[shuntsuhai + 1]--;
            tehai.push(shuntsuhai, shuntsuhai + 1, shuntsuhai + 2);
        }
        //刻子
        else{
            const candidate_kotsu = ids.filter(id => tehainum[id - 1] >= 3);
            const kotsuhai = candidate_kotsu[Math.floor(Math.random() * candidate_kotsu.length)];
            tehainum[kotsuhai - 1] -= 3;
            tehai.push(kotsuhai, kotsuhai, kotsuhai);
        }
    }

    return tehai;
}

const testcases: Map<string, MachiCase[]> = new Map();
testcases.set("清一色", casesChinitsu);
testcases.set("七対子", casesChitoitsu);
testcases.set("国士無双", casesKokushi);
testcases.set("枚数", casesMaisuu);

testcases.forEach((value, key) => {
    describe(key, () => {
        test.each(value)('$name', ({hais, expected}) => {
            const results = removeFour(hais, getMachi(hais));
            expect(results).toEqual(expected);
        });
    });
});

describe("ランダム", () => {
    test('random', () => {
        let count = new Array(9).fill(0);

        for(let i = 0; i < 100; i++){
            const hais = generateRandomTehai(4);
            const index = Math.floor(Math.random() * hais.length);
            hais.splice(index, 1);

            const machi = getMachi(hais);
            if(machi.length > 0) count[machi.length - 1]++;
            //待ちから完成系の手牌を作成して成立するかどうか調べる
            for(const hai of machi){
                const hais_agari = [...hais, hai];
                const blocks: BlockHaisList[] = new BlockDivider(new Hais(hais_agari).getHais()).divide();
                expect(blocks).not.toHaveLength(0);
            }
        }

        console.log(count.map((v, i) => `${i + 1}men->${v}`));
    });
});
