import {Hai} from './Hai';
import {Meld} from './Meld';

export class PlayerHand {
    private readonly tehai: Hai[];
    private readonly furo: Meld[];

    constructor(tehai: Hai[], furo: Meld[]){
        this.tehai = tehai;
        this.furo = furo;
    }

    getTehai(): Hai[] {
        return this.tehai;
    }

    getFuro(): Meld[] {
        return this.furo;
    }
}