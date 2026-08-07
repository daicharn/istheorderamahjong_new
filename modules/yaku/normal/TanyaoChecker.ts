import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class TanyaoChecker extends YakuCheckerBase{
    protected yakuName: string = "断么九";

    constructor(context: YakuContext){
        super(context);
        this.hanMenzen = 1;
        this.hanFuro = 1;
    }

    protected isSatisfied(): boolean {
        const allTiles = this.getAllTiles();
        return allTiles.every(h => h.isChuchanHai()) && (this.context.ctx.kuitan || this.isMenzen());
    }
}