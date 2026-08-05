import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { HaiType } from '../../MahjongConsts';


export class HonitsuChecker extends YakuCheckerBase{
    protected yakuName: string = "混一色";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 3;
        this.hanFuro = 2;
    }

    protected isSatisfied(): boolean {
        const allTiles = this.getAllTiles();
        const suits = new Set(allTiles.map(h => h.type));
        return suits.size === 2 && suits.has(HaiType.JIHAI);   
    }
}