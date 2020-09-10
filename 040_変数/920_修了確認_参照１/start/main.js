/**
 * 問題：
 * 以下の操作を行った際にコンソールで表示される
 * 値はどうなるでしょうか？結果を考えてみてください。
 */
let val = 0;
let val2 = val;
val2 = 1;
// 0,1
// console.log(val, val2);

// console.log(val); // 問題１

let obj = {
  prop1: 10,
};
const obj2 = obj;
// bbb = obj;
// console.log(bbb);
// aaa = obj.prop1;
// aaa = 1;
// console.log(aaa);
// aaa.obj = {
//   prop1 = 100
// };

obj2.prop1 = 9;

console.log(obj, obj2);

// 9 値を上書きしてるので！
// console.log(obj); // 問題２

function fn1(arg) {
  arg.prop2 = 8;
  return arg;
}
let obj3 = fn1(obj2);
// 処理通り考えたら8になった。詳しくは分からんが基礎しか使ってない。
console.log(obj); // 問題３

function fn2(arg) {
  console.log(arg);
  arg = {};
  console.log(arg);
  return arg;
}
const obj4 = fn2(obj); // 問題４

console.log(obj); // 問題４
// 代入しただけだから、参照元に変更はない
