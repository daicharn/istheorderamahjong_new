import { YakuCheckerBase } from '../YakuCheckerBase';
import { ChinitsuChecker } from '../normal/ChinitsuChecker';


export class ChurenChecker extends YakuCheckerBase{
    protected yakuName: string = "九蓮宝燈";

    protected isSatisfied(): boolean {
        const chinitsuChecker = new ChinitsuChecker(this.context);
        if(!chinitsuChecker.isChinitsu()) return false;
        if(!this.isMenzen()) return false;
        
        const count = new Array(9).fill(0);
        const hais = this.context.hais.map(h => h.clone());
        hais.forEach(h => count[h.num - 1]++);
        
        //1と9は3枚以上
        const hasEnoughTerminals = count[0] >= 3 && count[8] >= 3;
        if(!hasEnoughTerminals) return false;
        //2から8は1枚以上
        for(let i = 1; i <= 7; i++){
            if(count[i] < 1) return false;
        }

        return true;
    }

    public isChuren(): boolean {
        return this.isSatisfied();
    }
}