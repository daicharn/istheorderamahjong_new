import { TensuuResult } from "../../modules/tensuu/TensuuResult";
import { TensuuNumCase } from "../testConsts";

export const caseNum: TensuuNumCase[] = [
  {
    name: "hon1_fu30",
    desc: "1翻",
    honsuu: 1,
    fusuu: 30,
    expected: new TensuuResult(240, 1500, 1000, 500, {oya:500, ko:300})
  },
  {
    name: "hon1_fu40",
    desc: "1翻",
    honsuu: 1,
    fusuu: 40,
    expected: new TensuuResult(320, 2000, 1300, 700, {oya:700, ko:400})
  },
  {
    name: "hon1_fu50",
    desc: "1翻",
    honsuu: 1,
    fusuu: 50,
    expected: new TensuuResult(400, 2400, 1600, 800, {oya:800, ko:400})
  },
  {
    name: "hon1_fu60",
    desc: "1翻",
    honsuu: 1,
    fusuu: 60,
    expected: new TensuuResult(480, 2900, 2000, 1000, {oya:1000, ko:500})
  },
  {
    name: "hon1_fu70",
    desc: "1翻",
    honsuu: 1,
    fusuu: 70,
    expected: new TensuuResult(560, 3400, 2300, 1200, {oya:1200, ko:600})
  },
  {
    name: "hon1_fu80",
    desc: "1翻",
    honsuu: 1,
    fusuu: 80,
    expected: new TensuuResult(640, 3900, 2600, 1300, {oya:1300, ko:700})
  },
  {
    name: "hon1_fu90",
    desc: "1翻",
    honsuu: 1,
    fusuu: 90,
    expected: new TensuuResult(720, 4400, 2900, 1500, {oya:1500, ko:800})
  },
  {
    name: "hon1_fu100",
    desc: "1翻",
    honsuu: 1,
    fusuu: 100,
    expected: new TensuuResult(800, 4800, 3200, 1600, {oya:1600, ko:800})
  },
  {
    name: "hon1_fu110",
    desc: "1翻",
    honsuu: 1,
    fusuu: 110,
    expected: new TensuuResult(880, 5300, 3600, 1800, {oya:1800, ko:900})
  },
  {
    name: "hon2_fu20",
    desc: "2翻",
    honsuu: 2,
    fusuu: 20,
    expected: new TensuuResult(320, 2000, 1300, 700, {oya:700, ko:400})
  },
  {
    name: "hon2_fu25",
    desc: "2翻",
    honsuu: 2,
    fusuu: 25,
    expected: new TensuuResult(400, 2400, 1600, 800, {oya:800, ko:400})
  },
  {
    name: "hon2_fu30",
    desc: "2翻",
    honsuu: 2,
    fusuu: 30,
    expected: new TensuuResult(480, 2900, 2000, 1000, {oya:1000, ko:500})
  },
  {
    name: "hon2_fu40",
    desc: "2翻",
    honsuu: 2,
    fusuu: 40,
    expected: new TensuuResult(640, 3900, 2600, 1300, {oya:1300, ko:700})
  },
  {
    name: "hon2_fu50",
    desc: "2翻",
    honsuu: 2,
    fusuu: 50,
    expected: new TensuuResult(800, 4800, 3200, 1600, {oya:1600, ko:800})
  },
  {
    name: "hon2_fu60",
    desc: "2翻",
    honsuu: 2,
    fusuu: 60,
    expected: new TensuuResult(960, 5800, 3900, 2000, {oya:2000, ko:1000})
  },
  {
    name: "hon2_fu70",
    desc: "2翻",
    honsuu: 2,
    fusuu: 70,
    expected: new TensuuResult(1120, 6800, 4500, 2300, {oya:2300, ko:1200})
  },
  {
    name: "hon2_fu80",
    desc: "2翻",
    honsuu: 2,
    fusuu: 80,
    expected: new TensuuResult(1280, 7700, 5200, 2600, {oya:2600, ko:1300})
  },
  {
    name: "hon2_fu90",
    desc: "2翻",
    honsuu: 2,
    fusuu: 90,
    expected: new TensuuResult(1440, 8700, 5800, 2900, {oya:2900, ko:1500})
  },
  {
    name: "hon2_fu100",
    desc: "2翻",
    honsuu: 2,
    fusuu: 100,
    expected: new TensuuResult(1600, 9600, 6400, 3200, {oya:3200, ko:1600})
  },
  {
    name: "hon2_fu110",
    desc: "2翻",
    honsuu: 2,
    fusuu: 110,
    expected: new TensuuResult(1760, 10600, 7100, 3600, {oya:3600, ko:1800})
  },
  {
    name: "hon3_fu20",
    desc: "3翻",
    honsuu: 3,
    fusuu: 20,
    expected: new TensuuResult(640, 3900, 2600, 1300, {oya:1300, ko:700})
  },
  {
    name: "hon3_fu25",
    desc: "3翻",
    honsuu: 3,
    fusuu: 25,
    expected: new TensuuResult(800, 4800, 3200, 1600, {oya:1600, ko:800})
  },
  {
    name: "hon3_fu30",
    desc: "3翻",
    honsuu: 3,
    fusuu: 30,
    expected: new TensuuResult(960, 5800, 3900, 2000, {oya:2000, ko:1000})
  },
  {
    name: "hon3_fu40",
    desc: "3翻",
    honsuu: 3,
    fusuu: 40,
    expected: new TensuuResult(1280, 7700, 5200, 2600, {oya:2600, ko:1300})
  },
  {
    name: "hon3_fu50",
    desc: "3翻",
    honsuu: 3,
    fusuu: 50,
    expected: new TensuuResult(1600, 9600, 6400, 3200, {oya:3200, ko:1600})
  },
  {
    name: "hon3_fu60",
    desc: "3翻",
    honsuu: 3,
    fusuu: 60,
    expected: new TensuuResult(1920, 11600, 7700, 3900, {oya:3900, ko:2000})
  },
  {
    name: "hon3_fu70",
    desc: "3翻",
    honsuu: 3,
    fusuu: 70,
    expected: new TensuuResult(2000, 12000, 8000, 4000, {oya:4000, ko:2000})
  },
  {
    name: "hon4_fu20",
    desc: "4翻",
    honsuu: 4,
    fusuu: 20,
    expected: new TensuuResult(1280, 7700, 5200, 2600, {oya:2600, ko:1300})
  },
  {
    name: "hon4_fu25",
    desc: "4翻",
    honsuu: 4,
    fusuu: 25,
    expected: new TensuuResult(1600, 9600, 6400, 3200, {oya:3200, ko:1600})
  },
  {
    name: "hon4_fu30",
    desc: "4翻",
    honsuu: 4,
    fusuu: 30,
    expected: new TensuuResult(1920, 11600, 7700, 3900, {oya:3900, ko:2000})
  },
  {
    name: "hon4_fu40",
    desc: "4翻",
    honsuu: 4,
    fusuu: 40,
    expected: new TensuuResult(2000, 12000, 8000, 4000, {oya:4000, ko:2000})
  },
];