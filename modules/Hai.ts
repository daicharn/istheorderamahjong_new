import { HaiType } from "./MahjongConsts";
import { TILE } from "./tileDefs";

export class Hai{
    private readonly id: number;

    constructor(id: number){
        this.id = id;
    }

    get type(): HaiType{
        if((TILE.MANZU as readonly number[]).includes(this.id)) return HaiType.MANZU;
        if((TILE.PINZU as readonly number[]).includes(this.id)) return HaiType.PINZU;
        if((TILE.SOUZU as readonly number[]).includes(this.id)) return HaiType.SOUZU;
        if((TILE.JIHAI as readonly number[]).includes(this.id)) return HaiType.JIHAI;
        return HaiType.BACK;
    }

    get num(): number{
        if(this.type == HaiType.MANZU) return this.id;
        if(this.type == HaiType.PINZU) return this.id - 9;
        if(this.type == HaiType.SOUZU) return this.id - 18;
        if(this.type == HaiType.JIHAI) return this.id;
        return TILE.BACK;
    }

    get imageUrl(): string{
        let base: string = "../images/";
        //萬子
        if(this.type === HaiType.MANZU) return `${base}m_${this.num}.png`;
        //筒子
        if(this.type === HaiType.PINZU) return `${base}p_${this.num}.png`;
        //索子
        if(this.type === HaiType.SOUZU) return `${base}s_${this.num}.png`;
        //字牌
        if(this.type === HaiType.JIHAI) return `${base}j_${this.num - 27}.png`;
        
        return `${base}back.png`;
    }

    isRoutouHai(): boolean {
        return (this.num === 1 || this.num === 9) && this.isNumberHai();
    }

    isNumberHai(): boolean {
        return this.type === HaiType.MANZU || this.type === HaiType.PINZU || this.type === HaiType.SOUZU;
    }

    isJihai(): boolean {
        return this.type === HaiType.JIHAI;
    }

    isYaochuHai(): boolean {
        return this.isRoutouHai() || this.isJihai();
    }

    getId(): number {
        return this.id;
    }

    clone(): Hai {
        return new Hai(this.id);
    }
}