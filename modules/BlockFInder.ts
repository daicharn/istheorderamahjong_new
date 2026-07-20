import { Hai } from './Hai';

export class BlockFinder{
    protected readonly hais: Hai[];

    constructor(hais: Hai[]){
        this.hais = hais.map(h => h.clone());
    }
}