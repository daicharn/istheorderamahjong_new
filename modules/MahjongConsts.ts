//手配の数
export const TEHAI_NUMBER: number = 14;
//牌の種類数
export const PAI_TYPE_NUM: number = 34;

//鳴きのタイプ
export enum MeldType{
    CHI = "chi",
    PON = "pon",
    ANKAN = "ankan",
    MINKAN = "minkan"
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
    JANTO = "janto",
    KOTSU = "kotsu",
    SHUNTSU = "shuntsu",
    CHITOI = "chitoi",
    KOKUSHI = "kokushi"
}
//待ちのタイプ
export enum MachiType{
    TANKI,
    SHANPON,
    RYANMEN,
    KANCHAN,
    PENCHAN,
}
//アガリ時に付随する条件式の役
export enum WinEvent{
    NONE,
    TENHO,
    CHIHO,
    RINSHAN,
    CHANKAN,
    HAITEI,
    HOUTEI
}