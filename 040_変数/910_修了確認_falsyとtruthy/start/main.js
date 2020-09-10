/**
 * 問題１：
 * 以下のコンソールにはどのような値が表示されるでしょうか？
 */
// console.log("0 == false", 0 == false);
// true;
// console.log("0 === false", 0 === false);
// true：falseでした！型違うから、なるほどね。
// console.log('"false" == false', "false" == false);
// false
// console.log('"0" == 0', "0" == 0);
// true
// console.log('Boolean("0") === false', Boolean("0") === false);
// false
// console.log("Boolean(0) === false", Boolean(0) === false);
// false➡️booleanだから真偽値。ってことは0はtrueやん！
// console.log("!Boolean(0) === false", !Boolean(0) === false);
// false
// console.log("-1 == false", -1 == false);
// true➡️falseでした。-1は0と同じですか？って質問かな。だったら納豆食う
// console.log("!10 === false", !10 === false);
// false➡️trueでした。10ではない と 0が一致って意味？

/**
 * 問題２：
 * 関数fnの引数numが渡ってこない場合（undefinedまたはnullの場合）のみ、
 * 初期値として-1を設定したいものとします。
 *
 * 以下の関数fnの初期化を適切に書き直してください。
 * ※aには0以上の整数値が渡ってくるものとします。
 */
let a = 1;
// 下記がだめな理由は、0は真偽値でfalseなので-1になってしまうから。
// function fn(num) {
//   num = num || -1;
function fn(num) {
  if (num === undefined || num === null) {
    num = -1;
  }
  console.log(num);
}
fn(0);

/**
 * 問題３：
 * 以下のコードを実行した際にコンソールに
 * 期待の出力を行うような関数greetingを
 * 作成してみてください。
 *
 * greeting("Bob", "hi"); -> 出力結果："hi, Bob"
 * greeting("Bob"); -> 出力結果："hello, Bob"
 *
 */

// function greeting(input, input2) {
//   if (input2) {
//     console.log(`${input2}, ${input}`);
//   } else {
//     console.log(`hello, ${input}`);
//   }
// }

function greeting(a, b) {
  b = b || "hello";
  console.log(`${b}, ${a}`);
}
greeting("Bob", "hi");
greeting("Bob");
