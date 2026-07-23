import { Hai } from '../modules/Hai';
import { Melds } from "../modules/Melds";
import { PlayerHand } from "../modules/PlayerHand";
import { PlayerContext } from "../modules/PlayerContext";
import { YakuChecker } from "../modules/YakuChecker";
import { Meld } from "../modules/Meld";
import { MeldType } from "../modules/MahjongConsts";
import { BACK } from '../modules/tileDefs';

const ctx_default: PlayerContext = new PlayerContext({agariHai: new Hai(BACK), isTsumo: false, isMenzen: false, playerWind: "E", roundWind: "E"});
function makeYaku(hais: number[], melds: Meld[] = [], ctx: PlayerContext = ctx_default): YakuChecker {
    const hand = new PlayerHand(hais.map(n => new Hai(n)), melds);
    return new YakuChecker(hand, ctx);
}

describe("字一色", () => {
    test("tsuiso_1", () => {
        const ctx = new PlayerContext({agariHai: new Hai(29), isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([28,28,29,29,29,31,31,31,32,32,32,34,34,34], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["字一色", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("tsuiso_2", () => {
        const ctx = new PlayerContext({agariHai: new Hai(29), isTsumo: true, isMenzen: false, playerWind: "E", roundWind: "E"});
        const melds = new Melds();
        melds.add(new Meld([new Hai(32), new Hai(32), new Hai(32)], MeldType.PON));
        melds.add(new Meld([new Hai(34), new Hai(34), new Hai(34)], MeldType.PON));
        const yaku = makeYaku([28,28,29,29,29,31,31,31], [...melds], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["字一色", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
});
describe("清老頭", () => {
    test("chinroto_1", () => {
        const ctx = new PlayerContext({agariHai: new Hai(1), isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([1,1,1,9,9,9,10,10,18,18,18,27,27,27], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["清老頭", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("chinroto_2", () => {
        const ctx = new PlayerContext({agariHai: new Hai(10), isTsumo: true, isMenzen: false, playerWind: "E", roundWind: "E"});
        const melds = new Melds();
        melds.add(new Meld([new Hai(1), new Hai(1), new Hai(1)], MeldType.PON));
        melds.add(new Meld([new Hai(19), new Hai(19), new Hai(19)], MeldType.PON));
        const yaku = makeYaku([9,9,9,10,10,18,18,18], [...melds], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["清老頭", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
});
describe("緑一色", () => {
    test("ryuiso_1", () => {
        const ctx = new PlayerContext({agariHai: new Hai(21), isTsumo: true, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([20,20,21,21,22,22,24,24,24,26,26,26,33,33], [], ctx);
        
        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["緑一色", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("ryuiso_2", () => {
        const ctx = new PlayerContext({agariHai: new Hai(26), isTsumo: true, isMenzen: false, playerWind: "E", roundWind: "E"});
        const melds = new Melds();
        melds.add(new Meld([new Hai(20), new Hai(21), new Hai(22)], MeldType.CHI));
        melds.add(new Meld([new Hai(33), new Hai(33), new Hai(33)], MeldType.PON));
        const yaku = makeYaku([20,21,22,24,24,24,26,26], [...melds], ctx)

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["緑一色", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
});
describe("大四喜", () => {
    test("daisushi_1", () => {
        const ctx = new PlayerContext({agariHai: new Hai(30), isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([1,1,28,28,28,29,29,29,30,30,30,31,31,31], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["大四喜", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("daisushi_2", () => {
        const ctx = new PlayerContext({agariHai: new Hai(30), isTsumo: true, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([28,28,28,29,29,29,30,30,30,31,31,31,33,33], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["四暗刻", 0],["字一色", 0],["大四喜", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("daisushi_3", () => {
        const ctx = new PlayerContext({agariHai: new Hai(30), isTsumo: true, isMenzen: false, playerWind: "E", roundWind: "E"});
        const melds = new Melds();
        melds.add(new Meld([new Hai(29), new Hai(29), new Hai(29)], MeldType.PON));
        melds.add(new Meld([new Hai(31), new Hai(31), new Hai(31), new Hai(31)], MeldType.ANKAN));
        const yaku = makeYaku([26,26,28,28,28,30,30,30,], [...melds], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["大四喜", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
});
describe("小四喜", () => {
    test("shosushi_1", () => {
        const ctx = new PlayerContext({agariHai: new Hai(30), isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([1,1,1,28,28,28,29,29,30,30,30,31,31,31], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["小四喜", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("shosushi_2", () => {
        const ctx = new PlayerContext({agariHai: new Hai(28), isTsumo: true, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([28,28,28,29,29,29,30,30,31,31,31,33,33,33], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["字一色", 0],["小四喜", 0],["四暗刻", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("shosushi_3", () => {
        const ctx = new PlayerContext({agariHai: new Hai(28), isTsumo: true, isMenzen: false, playerWind: "E", roundWind: "E"});
        const melds = new Melds();
        melds.add(new Meld([new Hai(29), new Hai(29), new Hai(29)], MeldType.PON));
        melds.add(new Meld([new Hai(31), new Hai(31), new Hai(31)], MeldType.PON));
        const yaku = makeYaku([25,26,27,28,28,30,30,30], [...melds], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["小四喜", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
});
describe("四暗刻", () => {
    test("suanko_1", () => {
        const ctx = new PlayerContext({agariHai: new Hai(3), isTsumo: true, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([3,3,3,7,7,7,12,12,12,24,24,24,31,31], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["四暗刻", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("suanko_2", () => {
        const ctx = new PlayerContext({agariHai: new Hai(3), isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([3,3,3,7,7,7,12,12,12,24,24,24,31,31], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expect(yaku.check()).toEqual(expected);
    });
    test("suanko_3", () => {
        const ctx = new PlayerContext({agariHai: new Hai(31), isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([3,3,3,7,7,7,12,12,12,24,24,24,31,31], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["四暗刻単騎", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
    test("suanko_4", () => {
        const ctx = new PlayerContext({agariHai: new Hai(31), isTsumo: true, isMenzen: true, playerWind: "E", roundWind: "E"});
        const yaku = makeYaku([3,3,3,7,7,7,12,12,12,24,24,24,31,31], [], ctx);

        const expected = new Map<number, Map<string, number>>();
        expected.set(0, new Map<string, number>([["四暗刻単騎", 0]]));
        expect(yaku.check()).toEqual(expected);
    });
});