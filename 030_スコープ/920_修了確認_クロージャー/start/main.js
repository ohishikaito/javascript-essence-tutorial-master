/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 *
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 *
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 *
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */
function calcFactory(input) {
  let result = input;
  return {
    plus(num) {
      before_result = result;
      result += num;
      console.log(`${before_result} + ${num} = ${result}`);
    },
    minus(num) {
      before_result = result;
      result -= num;
      console.log(`${before_result} + ${num} = ${result}`);
    },
    multiply(num) {
      before_result = result;
      result *= num;
      console.log(`${before_result} + ${num} = ${result}`);
    },
    divide(num) {
      before_result = result;
      result /= num;
      console.log(`${before_result} + ${num} = ${result}`);
    },
  };
}

const calc = calcFactory(10); // 初期値を10として設定
calc.plus(5); // 出力結果 "10 + 5 = 15"
calc.minus(3); // 出力結果 "15 - 3 = 12"
calc.multiply(3); // 出力結果 "12 x 3 = 36"
calc.divide(2); // 出力結果 "36 / 2 = 18"

// function incrementFactory() {
//   let num = 0;
//   function a() {
//     num = num + 1;
//     console.log(num);
//   }
//   return a;
// }
// const increment = incrementFactory();
// increment();

// function ANF(num) {
//   console.log(`num:${num}`);
//   function AN(value) {
//     console.log(`value:${value}`);
//     return num + value;
//   }
//   return AN;
// }

// // const add5 = ANF(5);
// const add10 = ANF(10); // num = 10
// const result = add10(3);
// console.log(result);
