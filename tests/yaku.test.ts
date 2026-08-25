import { YakuChecker } from "../modules/yaku/YakuChecker";
import { casesYakuman } from './yaku/yakuman';
import { casesNormal } from './yaku/normal';
import { TehaiCase } from './testConsts';
import { YakuContext } from '../modules/yaku/YakuContext';
import { TehaiCaseRunner } from './tehaiCaseRunner';

type yakuMaps = Map<number, Map<string, number>>;

const testcases: TehaiCase<yakuMaps>[] = [];
casesYakuman.forEach(caseyakuman => testcases.push(caseyakuman));
casesNormal.forEach(casenormal => testcases.push(casenormal));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const yakuMaps: yakuMaps = new Map<number, Map<string, number>>();
            const runner: TehaiCaseRunner<yakuMaps> = new TehaiCaseRunner(testcase);
            const blocks = runner.blocks;
            blocks.forEach((block, index) => {
                const context = new YakuContext(runner.hand, runner.ctx, block);
                const yakuMap = new YakuChecker(context).check();
                if(yakuMap.size > 0) yakuMaps.set(index, yakuMap);
            });
            expect(yakuMaps).toEqual(testcase.expected);
        });
    });
});