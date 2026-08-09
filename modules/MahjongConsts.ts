//手配の数
export const TEHAI_NUMBER: number = 14;
//牌の種類数
export const PAI_TYPE_NUM: number = 34;

//鳴きのタイプ
export enum MeldType{
    CHI,
    PON,
    ANKAN,
    MINKAN
}
//牌のタイプ
export enum HaiType{
    MANZU,
    PINZU,
    SOUZU,
    JIHAI,
    BACK
}
//ブロックのタイプ
export enum BlockType{
    JANTO,
    KOTSU,
    SHUNTSU,
    CHITOI,
    KOKUSHI
}