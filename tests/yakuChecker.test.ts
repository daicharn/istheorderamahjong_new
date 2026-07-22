import { Hai } from '../modules/Hai';
import { Hais } from "../modules/Hais";
import { Melds } from "../modules/Melds";
import { PlayerHand } from "../modules/PlayerHand";
import { PlayerContext } from "../modules/PlayerContext";
import { YakuChecker } from "../modules/YakuChecker";
import { Meld } from "../modules/Meld";
import { MeldType } from "../modules/MahjongConsts";

test("tsuiso_1", () => {
    const hais = new Hais([28,28,29,29,29,31,31,31,32,32,32,34,34,34]);
    const melds = new Melds();
    const hand = new PlayerHand([...hais], [...melds]);
    const ctx = new PlayerContext({isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
    const yaku = new YakuChecker(hand, ctx);

    const expected = new Map<string, number>();
    expected.set("字一色", 0);
    expect(yaku.check()).toEqual(expected);
});
test("tsuiso_2", () => {
    const hais = new Hais([28,28,29,29,29,31,31,31]);
    const melds = new Melds();
    melds.add(new Meld([new Hai(32), new Hai(32), new Hai(32)], MeldType.PON));
    melds.add(new Meld([new Hai(34), new Hai(34), new Hai(34)], MeldType.PON));
    const hand = new PlayerHand([...hais], [...melds]);
    const ctx = new PlayerContext({isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
    const yaku = new YakuChecker(hand, ctx);

    const expected = new Map<string, number>();
    expected.set("字一色", 0);
    expect(yaku.check()).toEqual(expected);
});
test("chinroto_1", () => {
    const hais = new Hais([1,1,1,9,9,9,10,10,18,18,18,27,27,27]);
    const melds = new Melds();
    const hand = new PlayerHand([...hais], [...melds]);
    const ctx = new PlayerContext({isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
    const yaku = new YakuChecker(hand, ctx);

    const expected = new Map<string, number>();
    expected.set("清老頭", 0);
    expect(yaku.check()).toEqual(expected);
});
test("chinroto_2", () => {
    const hais = new Hais([9,9,9,10,10,18,18,18]);
    const melds = new Melds();
    melds.add(new Meld([new Hai(1), new Hai(1), new Hai(1)], MeldType.PON));
    melds.add(new Meld([new Hai(19), new Hai(19), new Hai(19)], MeldType.PON));
    const hand = new PlayerHand([...hais], [...melds]);
    const ctx = new PlayerContext({isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
    const yaku = new YakuChecker(hand, ctx);

    const expected = new Map<string, number>();
    expected.set("清老頭", 0);
    expect(yaku.check()).toEqual(expected);
});