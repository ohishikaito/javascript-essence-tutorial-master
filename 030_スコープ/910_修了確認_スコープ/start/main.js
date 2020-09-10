/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */
function fn() {
  let a;
  if (true) {
    a = "fn called";
  }
  return a; // ReferenceError: a is not defined
}
// if文内にreturnを入れたけど、最初にletで変数aを定義すればおk
const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
let val = "val1";
function fn2() {
  console.log(val); // 期待値->'val1'

  if (true) {
    let val = "val2";
    console.log(val); // 期待値->'val2'
  }

  console.log(val); // 期待値->'val1'
}
fn2();
// valの変数名をval2に変えたけど、varをletに変えればブロック範囲になるからおk

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

{
  let num = 0;
  function increment() {
    num = num + 1;
    console.log(num);
  }
}
increment();
increment();
increment();
increment();
// わかるかい！！！！！！！！！

// function incrementFactory() {
//   let num = 0;
//   //   console.log("a");
//   function a() {
//     num = num + 1;
//     console.log(num);
//   }
//   //   console.log(a);
//   return a;
// }

// const increment = incrementFactory();
// // console.log(increment);
// increment();
// increment();
// increment();
// increment();

// let c = (function () {
//   let privateVal = 1;
//   function publicFn() {
//     console.log(privateVal++);
//   }
//   return {
//     publicFn,
//   };
// })();
// c.publicFn();
// c.publicFn();
// c.publicFn();
// c.publicFn();

// let a = 2;
// window.a = 4;
// function fn1() {
//   let a = 1;
//   function fn2() {
//     if (true) {
//       let a = 3;
//     }
//     console.log(a);
//   }
//   fn2();
// }
// fn1();
