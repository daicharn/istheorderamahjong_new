import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { HaiType } from '../../MahjongConsts';


export class HonitsuChecker extends YakuCheckerBase{
    protected hanMenzen: number = 3;
    protected hanFuro: number = 2;
    protected yakuName: string = "混一色";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const allTiles = [
            ...this.context.hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        const suits = new Set(allTiles.map(h => h.type));
        return suits.size === 2 && suits.has(HaiType.JIHAI);   
    }
}