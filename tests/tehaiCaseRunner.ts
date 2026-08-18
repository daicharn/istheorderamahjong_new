import { BlockDivider } from "../modules/BlockDivider";
import { BlockHaisList } from "../modules/BlockHaisList";
import { Hai } from "../modules/Hai";
import { WinEvent } from "../modules/MahjongConsts";
import { Meld } from "../modules/Meld";
import { Melds } from "../modules/Melds";
import { PlayerContext } from "../modules/PlayerContext";
import { PlayerHand } from "../modules/PlayerHand";
import { TILE } from "../modules/tileDefs";
import { TehaiCase } from "./testConsts";

export class TehaiCaseRunner {
    private readonly testCase: TehaiCase;
    private readonly hais: Hai[];
    private readonly melds: Melds;
    public readonly hand: PlayerHand;
    public readonly ctx: PlayerContext;
    public readonly blocks: BlockHaisList[];

    constructor(testcase: TehaiCase){
        this.testCase = testcase;
        this.hais = this.testCase.hais.map(n => new Hai(n));
        this.melds = this.makeMelds();
        this.hand = this.makeHand();
        this.ctx = this.makeContext();
        this.blocks = this.divideBlocks();
    }

    private makeContext(): PlayerContext{
        const ctx = new PlayerContext({agariHai: new Hai(this.testCase.agariHai), 
            isTsumo: this.testCase.isTsumo, 
            playerWind: this.testCase.playerWind ?? TILE.WIND.EAST,
            roundWind: this.testCase.roundWind ?? TILE.WIND.EAST,
            event: this.testCase.event ?? WinEvent.NONE,
            riichi: this.testCase.riichi ?? false,
            daburii: this.testCase.daburii ?? false,
            ippatsu: this.testCase.ippatsu ?? false,
            kuitan: this.testCase.kuitan ?? false
        });

        return ctx;
    }

    private makeMelds(): Melds{
        const melds = new Melds();
        this.testCase.melds.forEach(m => melds.add(Meld.from(m.hai, m.type)));
        return melds;
    }

    private makeHand(): PlayerHand{
        return new PlayerHand(this.hais, [...this.melds]);
    }

    private divideBlocks(): BlockHaisList[]{
        return new BlockDivider(this.hais).divide();
    }
}