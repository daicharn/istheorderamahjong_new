import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinrotoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 0;
    protected hanFuro: number = 0;
    protected yakuName: string = "清老頭";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        const allTiles = this.getAllTiles();
        return allTiles.every(h => h.isRoutouHai());
    }
}