import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { IMentsu } from '../../IMentsu';


export class SanankoChecker extends YakuCheckerBase{
    protected hanMenzen: number = 2;
    protected hanFuro: number = 2;
    protected yakuName: string = "三暗刻";

    constructor(context: YakuContext){
        super(context);
    }

    protected isSatisfied(): boolean {
        return this.countAnko() === 3;
    }
}