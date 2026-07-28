import { TsuisoChecker } from './TsuisoChecker';
import { ChinrotoChecker } from './ChinrotoChecker';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { YakuContext } from '../YakuContext';

export type YakuCheckerConstructor =
    new (context: YakuContext, index: number) => YakuCheckerBase;

export const YakumanCheckers: YakuCheckerConstructor[] = [
    TsuisoChecker,
    ChinrotoChecker,
];