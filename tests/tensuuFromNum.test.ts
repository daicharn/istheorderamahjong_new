import { TensuuNumCase } from './testConsts';
import { TensuuCalculator } from "../modules/tensuu/TensuuCalculator";
import { caseNum } from './tensuu/tensuuNum';
import { YakuContext } from '../modules/yaku/YakuContext';
import { PlayerHand } from '../modules/PlayerHand';
import { PlayerContext } from '../modules/PlayerContext';
import { BlockHaisList } from '../modules/BlockHaisList';
import { Hai } from '../modules/Hai';
import { TILE } from '../modules/tileDefs';

const testcases: TensuuNumCase[] = [];
caseNum.forEach(casenum => testcases.push(casenum));

const contextStub = new YakuContext(
    new PlayerHand([], []), 
    new PlayerContext({agariHai: new Hai(1), isTsumo: false, playerWind: TILE.WIND.EAST, roundWind: TILE.WIND.EAST}), 
    new BlockHaisList()
);
const yakuStub = new Map<string, number>();

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const calc = new TensuuCalculator(contextStub, yakuStub);
            const expected = calc.calcTensuu(testcase.honsuu, testcase.fusuu);
            expect(testcase.expected).toEqual(expected);
        });
    });
});