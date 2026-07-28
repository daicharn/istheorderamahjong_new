import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class TsuisoChecker extends YakuCheckerBase{
    constructor(context: YakuContext, index: number){
        super(context, index, "字一色", 0, 0);
    }
}