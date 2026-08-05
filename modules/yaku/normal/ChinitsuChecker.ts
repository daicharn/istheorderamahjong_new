import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinitsuChecker extends YakuCheckerBase{
    protected yakuName: string = "清一色";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 6;
        this.hanFuro = 5;
    }

    protected isSatisfied(): boolean {
        const allTiles = this.getAllTiles();
        if(allTiles.length === 0) return false;
        const suitType = allTiles[0].type;
        
        return allTiles.every(h => h.type === suitType);
    }

    public isChinitsu(): boolean {
        return this.isSatisfied();
    }
}