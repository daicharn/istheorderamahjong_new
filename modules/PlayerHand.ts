import {Hais} from './Hais';
import {Melds} from './Melds';

export class PlayerHand {
    private readonly tehai: Hais;
    private readonly furo: Melds;

    constructor(tehai: Hais, furo: Melds){
        this.tehai = tehai;
        this.furo = furo;
    }

    getTehai(): Hais {
        return this.tehai;
    }

    getFuro(): Melds {
        return this.furo;
    }
}