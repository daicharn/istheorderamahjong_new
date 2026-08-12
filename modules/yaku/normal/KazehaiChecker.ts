import { Hai } from '../../Hai';
import { YakuContext } from '../YakuContext';
import { YakuCheckerBase } from '../YakuCheckerBase';
import { Wind } from '../../tileDefs';

export class KazehaiChecker extends YakuCheckerBase{
    protected yakuName: string;
    private required: Wind[];
    private forbidden: Wind[];

    constructor(context: YakuContext, yakuName: string, required: Wind[], forbidden?: Wind[]){
        super(context);
        this.hanMenzen = 1;
        this.hanFuro = 1;
        this.required = required;
        this.forbidden = forbidden ?? [];
        this.yakuName = `${yakuName}:${required[0].name}`;
    }

    protected isSatisfied(): boolean {
        return this.hasHaisMentsu((m) => m.isKotsuOrKantsu(), [...this.required.map(w => new Hai(w.id))], [...this.forbidden.map(w => new Hai(w.id))]);
    }
}