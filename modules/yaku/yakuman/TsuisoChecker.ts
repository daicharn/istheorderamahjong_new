import { YakuCheckerBase } from '../YakuCheckerBase';

export class TsuisoChecker extends YakuCheckerBase{
    protected yakuName: string = "字一色";

    protected isSatisfied(): boolean {
        const allTiles = this.getAllTiles();
        return allTiles.every(h => h.isJihai());
    }
}