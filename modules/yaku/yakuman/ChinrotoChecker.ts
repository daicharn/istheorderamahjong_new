import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinrotoChecker extends YakuCheckerBase{
    protected yakuName: string = "清老頭";

    protected isSatisfied(): boolean {
        const allTiles = this.getAllTiles();
        return allTiles.every(h => h.isRoutouHai());
    }
}