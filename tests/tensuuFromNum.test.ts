import { TensuuNumCase } from './testConsts';
import { TensuuCalculator } from "../modules/tensuu/TensuuCalculator";
import { caseNum } from './tensuu/tensuuNum';

const testcases: TensuuNumCase[] = [];
caseNum.forEach(casenum => testcases.push(casenum));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const expected = TensuuCalculator.calcTensuu(testcase.honsuu, testcase.fusuu);
            expect(testcase.expected).toEqual(expected);
        });
    });
});