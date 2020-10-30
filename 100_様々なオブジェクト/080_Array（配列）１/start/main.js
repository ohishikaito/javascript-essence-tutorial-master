const arry = [1, 2, 3, 4, 5];
const arry2 = [0, ...arry, 6, 7, 8];
arry.push(6);
const result = arry.splice(0, 2);
console.log(arry2, result);

// push 挿入
// pop 最後が削除（下記全部、戻り値で帰る）
// shift 先頭を削除
// unshift 先頭に値を追加
// splice　指定した長さを切り取る
// concat 配列を合体できる
