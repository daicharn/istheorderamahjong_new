import { Hais } from "../modules/Hais";
import { BlockHaisList } from "../modules/BlockHaisList";
import {BlockDivider} from '../modules/BlockDivider';
import {Melds} from "../modules/Melds";
import {PlayerHand} from "../modules/PlayerHand";
import {PlayerContext} from "../modules/PlayerContext";
import {YakuChecker} from "../modules/YakuChecker";

function getBlockStrings(hais_num: number[]): string[]{
    const blocks: BlockHaisList[] = new BlockDivider(new Hais(hais_num).getHais()).divide();

    const blockedHaisStrings: string[] = [];
    for(let i = 0; i < blocks.length; i++){
        blockedHaisStrings.push(blocks[i].blockToString());
    }

    return blockedHaisStrings;
}

test("tsuiso_nonmelds_1", () => {
    const hais = new Hais([28,28,29,29,29,31,31,31,32,32,32,34,34,34]);
    const melds = new Melds();
    const hand = new PlayerHand(hais, melds);
    const ctx = new PlayerContext({isTsumo: false, isMenzen: true, playerWind: "E", roundWind: "E"});
    const yaku = new YakuChecker(hand, ctx);

    expect(yaku.check()).toBeTruthy();
});