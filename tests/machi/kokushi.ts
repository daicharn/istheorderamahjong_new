export const casesKokushi = [
  {
    name: "kokushi_13men",
    hais: [1,9,10,18,19,27,28,29,30,31,32,33,34],
    expected: [1,9,10,18,19,27,28,29,30,31,32,33,34]
  },
  {
    name: "kokushi_normal_1",
    hais: [1,1,10,18,19,27,28,29,30,31,32,33,34],
    expected: [9]
  },
  {
    name: "kokushi_normal_2",
    hais: [1,9,10,18,19,27,28,29,30,31,32,33,33],
    expected: [34]
  },
  {
    name: "kokushi_normal_3",
    hais: [1,9,10,18,19,27,27,29,30,31,32,33,34],
    expected: [28]
  },
];