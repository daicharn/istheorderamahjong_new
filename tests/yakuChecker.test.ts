import { YakuChecker } from "../modules/yaku/YakuChecker";
import { casesYakuman } from './yaku/yakuman';
import { casesNormal } from './yaku/normal';
import { TehaiCase } from './testConsts';
import { YakuContext } from '../modules/yaku/YakuContext';
import { TehaiCaseRunner } from './tehaiCaseRunner';

const testcases: TehaiCase[] = [];
casesYakuman.forEach(caseyakuman => testcases.push(caseyakuman));
casesNormal.forEach(casenormal => testcases.push(casenormal));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();
            const runner: TehaiCaseRunner = new TehaiCaseRunner(testcase);
            const blocks = runner.blocks;
            blocks.forEach((block, index) => {
                const context = new YakuContext(runner.hand, runner.ctx, block);
                const yaku_map = new YakuChecker(context).check();
                if(yaku_map.size > 0) yaku_maps.set(index, yaku_map);
            })

            expect(yaku_maps).toEqual(testcase.expected);
        });
    });
});