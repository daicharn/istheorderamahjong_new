import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class RyanpekoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 3;
    protected hanFuro: number = 0;
    protected yakuName: string = "二盃口";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        if(!this.isMenzen()) return false;

        const groups = this.getGroupsByShuntsu();

        let count = 0;
        for(const group of groups.values()){
            if(group.length >= 2){
                count += Math.floor(group.length / 2);
            }
        }

        return count >= 2;
    }
}