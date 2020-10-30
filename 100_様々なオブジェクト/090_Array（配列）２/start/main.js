const arry = [1, 2, 3, 4, 5];

arry.forEach(function (value, i, arry) {
  // console.log(value);
});

// const newArry = arry.map(function (value, i, arry) {
//   console.log(value);
//   return arry;
//   // return value * 2;
// });
// console.log(arry, newArry);

const filterArry = arry.filter(function (value, i, arry) {
  return i == 1;
  // return value * 2;
});

console.log(filterArry);

// forEach 繰り返す
// map 配列をいじって返す
// filter 特定の条件だけ返す
