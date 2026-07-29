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
import { KokushiChecker } from './yakuman/KokushiChecker';
import { Kokushi13Checker } from './yakuman/Kokushi13Checker';
import { DaisushiChecker } from './yakuman/DaisushiChecker';
import { ShosushiChecker } from './yakuman/ShosushiChecker';
import { DaisangenChecker } from './yakuman/DaisangenChecker';

import { ChinitsuChecker } from './normal/ChinitsuChecker';

export type YakuCheckerConstructor =
    new (context: YakuContext) => YakuCheckerBase;

export const YakumanCheckers: YakuCheckerConstructor[] = [
    TsuisoChecker,
    ChinrotoChecker,
    RyuisoChecker,
    SukantsuChecker,
    ChurenChecker,
    Churen9Checker,
    SuankoChecker,
    SuankoTankiChecker,
    KokushiChecker,
    Kokushi13Checker,
    DaisushiChecker,
    ShosushiChecker,
    DaisangenChecker,
];

export const NormalYakuCheckers: YakuCheckerConstructor[] = [
    ChinitsuChecker,
];