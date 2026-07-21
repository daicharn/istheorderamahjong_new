import {Hai} from './Hai';

export class Hais{
    private readonly hais: Hai[];

    constructor(ids: number[] = []){
        this.hais = ids.map(id => new Hai(id));
    }

    //末尾に追加
    push(id: number){
        this.hais.push(new Hai(id));
    }

    //末尾を取り除く
    pop(): Hai | undefined {
        return this.hais.pop()
    }

    //任意の牌を取り除く
    remove(id: number) {
        const index = this.hais.findIndex(h => h.getId() === id);
        if(index !== -1) this.hais.splice(index, 1);
    }

    //牌を昇順に並び替える
    sort() {
        this.hais.sort((a, b) => a.getId() - b.getId());
    }

    //指定された牌がいくつあるか数える
    count(id: number): number {
        return this.hais.filter(h => h.getId() === id).length;
    }

    getHais(): Hai[] {
        return this.hais;
    }

    get ids(): number[] {
        return this.hais.map(h => h.getId());
    }

    get length(): number {
        return this.hais.length;
    }
}