import { YakuCheckerBase } from './YakuCheckerBase';
import { YakuContext } from './YakuContext';
import { TsuisoChecker } from './yakuman/TsuisoChecker';
import { ChinrotoChecker } from './yakuman/ChinrotoChecker';
import { RyuisoChecker } from './yakuman/RyuisoChecker';
import { SukantsuChecker } from './yakuman/SukantsuChecker';
import { ChurenChecker } from './yakuman/ChurenChecker';
import { Churen9Checker } from './yakuman/Churen9Checker';
import { SuankoChecker } from './yakuman/SuankoChecker';
import { SuankoTankiChecker } from './yakuman/SuankoTankiChecker';

export type YakuCheckerConstructor =
    new (context: YakuContext, index: number) => YakuCheckerBase;

export const YakumanCheckers: YakuCheckerConstructor[] = [
    TsuisoChecker,
    ChinrotoChecker,
    RyuisoChecker,
    SukantsuChecker,
    ChurenChecker,
    Churen9Checker,
    SuankoChecker,
    SuankoTankiChecker
];