import { Hai } from "./Hai";
import { Wind } from "./tileDefs";

interface UserOptions {
    agariHai: Hai
    isTsumo: boolean;
    playerWind: Wind;
    roundWind: Wind;
    tenho?: boolean;
    chiho?: boolean;
    riichi?: boolean;
    daburii?: boolean;
    ippatsu?: boolean;
    rinshan?: boolean;
    chankan?: boolean;
    haitei?: boolean;
    houtei?: boolean;
}

export class PlayerContext{
    agariHai: Hai;
    isTsumo: boolean;
    playerWind: Wind;
    roundWind: Wind;
    tenho: boolean;
    chiho: boolean;
    riichi: boolean;
    daburii: boolean;
    ippatsu: boolean;
    rinshan: boolean;
    chankan: boolean;
    haitei: boolean;
    houtei: boolean;

    constructor(options: UserOptions) {
        this.agariHai = options.agariHai;
        this.isTsumo = options.isTsumo;
        this.playerWind = options.playerWind;
        this.roundWind = options.roundWind;
        this.tenho = options.tenho ?? false;
        this.chiho =  options.chiho ?? false;
        this.riichi =  options.riichi ?? false;
        this.daburii =  options.daburii ?? false;
        this.ippatsu =  options.ippatsu ?? false;
        this.rinshan =  options.rinshan ?? false;
        this.chankan =  options.chankan ?? false;
        this.haitei =  options.haitei ?? false;
        this.houtei =  options.houtei ?? false;
    }
}