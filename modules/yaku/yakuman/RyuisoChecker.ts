import { YakuCheckerBase } from '../YakuCheckerBase';

export class RyuisoChecker extends YakuCheckerBase{
    protected yakuName: string = "緑一色";
    
    protected isSatisfied(): boolean {
        const greenNums = new Set([20, 21, 22, 24, 26, 33]);

        const allTiles = [
            ...this.context.hais,
            ...this.context.melds.flatMap(m => m.getHais())
        ];

        return allTiles.every(h => greenNums.has(h.getId()));
    }
}