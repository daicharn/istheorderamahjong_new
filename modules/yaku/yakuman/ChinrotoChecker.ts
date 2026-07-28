import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';


export class ChinrotoChecker extends YakuCheckerBase{
    constructor(context: YakuContext, index: number){
        super(context, index,"清老頭", 0, 0);
    }
}