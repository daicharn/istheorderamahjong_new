import { YakuChecker } from "../modules/yaku/YakuChecker";
import { casesScore } from './tensuu/score';
import { TehaiCase, Score } from './testConsts';
import { YakuContext } from '../modules/yaku/YakuContext';
import { TehaiCaseRunner } from './tehaiCaseRunner';
import { ScoreResolver } from '../modules/tensuu/ScoreResolver';

const testcases: TehaiCase<Score[]>[] = [];
casesScore.forEach(casesscore => testcases.push(casesscore));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const scoreResults: Score[] = [];
            const runner: TehaiCaseRunner<Score[]> = new TehaiCaseRunner(testcase);
            const blocks = runner.blocks;
            blocks.forEach((block) => {
                const context = new YakuContext(runner.hand, runner.ctx, block);
                const yakuMap = new YakuChecker(context).check();
                const scoreResult = new ScoreResolver(context, yakuMap).resolve();
                scoreResults.push({han: scoreResult.han, fuBasic: scoreResult.fuBasic, fuCeiled: scoreResult.fuCeiled});
                console.log(scoreResult.fuDetail);
            });
            expect(scoreResults).toEqual(testcase.expected);
        });
    });
});