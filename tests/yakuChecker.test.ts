import { Hai } from '../modules/Hai';
import { Melds } from "../modules/Melds";
import { PlayerHand } from "../modules/PlayerHand";
import { PlayerContext } from "../modules/PlayerContext";
import { YakuChecker } from "../modules/yaku/YakuChecker";
import { Meld } from "../modules/Meld";
import { WinEvent } from "../modules/MahjongConsts";
import { TILE } from '../modules/tileDefs';
import { casesYakuman } from './yaku/yakuman';
import { casesNormal } from './yaku/normal';
import { TehaiCase } from './testConsts';
import { BlockDivider } from "../modules/BlockDivider";
import { YakuContext } from '../modules/yaku/YakuContext';

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

            const yaku_maps: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();
            const hais = testcase.hais.map(n => new Hai(n));
            const hand = new PlayerHand(hais, [...melds]);
            
            const blocks = new BlockDivider(hais).divide();
            blocks.forEach((block, index) => {
                const context = new YakuContext(hand, ctx, block);
                const yaku_map = new YakuChecker(context).check();
                if(yaku_map.size > 0) yaku_maps.set(index, yaku_map);
            })

            expect(yaku_maps).toEqual(testcase.expected);
        });
    });
});