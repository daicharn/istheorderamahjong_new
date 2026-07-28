import { Hai } from '../modules/Hai';
import { Melds } from "../modules/Melds";
import { PlayerHand } from "../modules/PlayerHand";
import { PlayerContext } from "../modules/PlayerContext";
import { YakuChecker } from "../modules/yaku/YakuChecker";
import { Meld } from "../modules/Meld";
import { MeldType } from "../modules/MahjongConsts";
import { BACK } from '../modules/tileDefs';
import { casesYakuman } from './yaku/yakuman';
import { TehaiCase } from './testConsts';

const ctx_default: PlayerContext = new PlayerContext({agariHai: new Hai(BACK), isTsumo: false, playerWind: "E", roundWind: "E"});
function makeYaku(hais: number[], melds: Meld[] = [], ctx: PlayerContext = ctx_default): YakuChecker {
    const hand = new PlayerHand(hais.map(n => new Hai(n)), melds);
    return new YakuChecker(hand, ctx);
};
function makeNaki(hainum: number, type: MeldType): Meld {
    const hai = new Hai(hainum);
    if(type === MeldType.PON){
        return new Meld([hai, hai, hai], type);
    }
    if(type === MeldType.CHI){
        return new Meld([hai, new Hai(hainum + 1), new Hai(hainum + 2)], type);
    }
    else
        return new Meld([hai, hai, hai, hai], type);
};

const testcases: TehaiCase[] = [];
casesYakuman.forEach(caseyakuman => testcases.push(caseyakuman));

testcases.forEach(testcase => {
    describe(testcase.desc, () => {
        test(testcase.name, () => {
            const ctx = new PlayerContext({agariHai: new Hai(testcase.agariHai), isTsumo: testcase.isTsumo, playerWind: "E", roundWind: "E"});
            const melds = new Melds();
            testcase.melds.forEach(m => melds.add(makeNaki(m.hai, m.type)));
            const yaku = makeYaku(testcase.hais, [...melds], ctx);
            expect(yaku.check()).toEqual(testcase.expected);
        });
    });
});