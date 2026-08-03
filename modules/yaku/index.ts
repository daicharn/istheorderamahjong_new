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
import { HonitsuChecker } from './normal/HonitsuChecker';
import { JunchanChecker } from './normal/JunchanChecker';
import { HonchanChecker } from './normal/HonchanChecker';
import { HonrotoChecker } from './normal/HonrotoChecker';
import { RyanpekoChecker } from './normal/RyanpekoChecker';
import { ChitoitsuChecker } from './normal/ChitoitsuChecker';
import { SanankoChecker } from './normal/SanankoChecker';
import { ToitoiChecker } from './normal/ToitoiChecker';
import { IipekoChecker } from './normal/IipekoChecker';
import { ShosangenChecker } from './normal/ShosangenChecker';
import { YakuhaiChecker } from './normal/YakuhaiChecker';

export type YakuCheckerConstructor =
    (context: YakuContext) => YakuCheckerBase;

export const YakumanCheckers: YakuCheckerConstructor[] = [
    ctx => new TsuisoChecker(ctx),
    ctx => new ChinrotoChecker(ctx),
    ctx => new RyuisoChecker(ctx),
    ctx => new SukantsuChecker(ctx),
    ctx => new ChurenChecker(ctx),
    ctx => new Churen9Checker(ctx),
    ctx => new SuankoChecker(ctx),
    ctx => new SuankoTankiChecker(ctx),
    ctx => new KokushiChecker(ctx),
    ctx => new Kokushi13Checker(ctx),
    ctx => new DaisushiChecker(ctx),
    ctx => new ShosushiChecker(ctx),
    ctx => new DaisangenChecker(ctx),
];

export const NormalYakuCheckers: YakuCheckerConstructor[] = [
    ctx => new ChinitsuChecker(ctx),
    ctx => new HonitsuChecker(ctx),
    ctx => new JunchanChecker(ctx),
    ctx => new HonchanChecker(ctx),
    ctx => new HonrotoChecker(ctx),
    ctx => new RyanpekoChecker(ctx),
    ctx => new ChitoitsuChecker(ctx),
    ctx => new SanankoChecker(ctx),
    ctx => new ToitoiChecker(ctx),
    ctx => new IipekoChecker(ctx),
    ctx => new ShosangenChecker(ctx),
    ctx => new YakuhaiChecker(ctx, 31, "白"),
    ctx => new YakuhaiChecker(ctx, 32, "發"),
    ctx => new YakuhaiChecker(ctx, 33, "中"),
];