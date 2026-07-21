import {Hai} from './Hai';
import { MeldType } from './MahjongConsts';

export class Meld {
    private readonly hais: Hai[];
    private readonly type: MeldType;

    constructor(hais: Hai[], type: MeldType){
        this.hais = hais;
        this.type = type;
    }
}