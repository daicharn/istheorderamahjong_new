import { Hai } from '../modules/Hai';
import { Melds } from "../modules/Melds";
import { PlayerHand } from "../modules/PlayerHand";
import { PlayerContext } from "../modules/PlayerContext";
import { YakuChecker } from "../modules/yaku/YakuChecker";
import { Meld } from "../modules/Meld";
import { MeldType, WinEvent } from "../modules/MahjongConsts";
import { TILE } from '../modules/tileDefs';
import { casesYakuman } from './yaku/yakuman';
import { casesNormal } from './yaku/normal';
import { TehaiCase } from './testConsts';

const ctx_default: PlayerContext = new PlayerContext({agariHai: new Hai(TILE.BACK), isTsumo: false, playerWind: TILE.WIND.EAST, roundWind: TILE.WIND.EAST});
function makeYaku(hais: number[], melds: Meld[] = [], ctx: PlayerContext = ctx_default): YakuChecker {
    const hand = new PlayerHand(hais.map(n => new Hai(n)), melds);
    return new YakuChecker(hand, ctx);
};

const testcases: TehaiCase[] = [];
casesYakuman.forEach(caseyakuman => testcases.push(caseyakuman));
casesNormal.forEach(casenormal => testcases.push(casenormal));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const ctx = new PlayerContext({agariHai: new Hai(testcase.agariHai), 
                isTsumo: testcase.isTsumo, 
                playerWind: testcase.playerWind ?? TILE.WIND.EAST,
                roundWind: testcase.roundWind ?? TILE.WIND.EAST,
                event: testcase.event ?? WinEvent.NONE,
                riichi: testcase.riichi ?? false,
                daburii: testcase.daburii ?? false,
                ippatsu: testcase.ippatsu ?? false,
                kuitan: testcase.kuitan ?? false});
            const melds = new Melds();
            testcase.melds.forEach(m => melds.add(Meld.from(m.hai, m.type)));
            const yaku = makeYaku(testcase.hais, [...melds], ctx);
            expect(yaku.check()).toEqual(testcase.expected);
        });
    });
});