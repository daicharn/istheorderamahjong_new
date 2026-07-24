import { Hai } from './Hai';
import { BlockDivider } from './BlockDivider';
import { PAI_TYPE_NUM } from './MahjongConsts';

export class MachiCalculator{
    private readonly hais: Hai[];

    constructor(hais: Hai[]){
        this.hais = hais.map(h => h.clone()).sort((a, b) => a.getId() - b.getId());
    }

    calculate(): number[] {
        const machi: number[] = [];

        for(let i = 1; i <= PAI_TYPE_NUM; i++){
            const testhais = [...this.hais, new Hai(i)];
            const divided = new BlockDivider(testhais).divide();
            if(divided.length > 0){
                machi.push(i);
            }
        }

        return machi;
    }
}