import { IMentsu } from "../IMentsu";

export class FuDetail{
    readonly name: string;
    readonly fu: number;
    readonly mentsu?: IMentsu;

    constructor(name: string, fu: number, mentsu?: IMentsu){
        this.name = name;
        this.fu = fu;
        this.mentsu = mentsu;
    }
}