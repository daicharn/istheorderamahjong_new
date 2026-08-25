import { YakuChecker } from "../modules/yaku/YakuChecker";
import { FuSpec, TehaiCase } from './testConsts';
import { YakuContext } from '../modules/yaku/YakuContext';
import { TehaiCaseRunner } from './tehaiCaseRunner';
import { FuCalculator } from "../modules/tensuu/Fucalculator";
import { caseFu } from './tensuu/fu';
import { FuDetail } from "../modules/tensuu/FuDetail";

function sortFuspecs(specs: FuSpec[][]): FuSpec[][] {
    const sortedSpecs: FuSpec[][] = [];
    for(const spec of specs){
        sortedSpecs.push([...spec].sort((a, b) => a.name.localeCompare(b.name)));
    }
    return sortedSpecs;
}

const testcases: TehaiCase<FuSpec[][]>[] = [];
caseFu.forEach(casefu => testcases.push(casefu));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const fuList: FuDetail[][] = [];
            const runner: TehaiCaseRunner = new TehaiCaseRunner(testcase);
            const blocks = runner.blocks;
            blocks.forEach((block) => {
                const context = new YakuContext(runner.hand, runner.ctx, block);
                const yaku_map = new YakuChecker(context).check();
                fuList.push(new FuCalculator(context, yaku_map).calcFu());
            });
            const expected: FuDetail[][] = [];
            for(const specs of testcase.expected){
                const details: FuDetail[] = [];
                for(const spec of specs){
                    details.push(new FuDetail(spec.name, spec.fu, spec.mentsu));
                }
                expected.push(details);
            }
            expect(sortFuspecs(fuList)).toEqual(sortFuspecs(expected));
        });
    });
});