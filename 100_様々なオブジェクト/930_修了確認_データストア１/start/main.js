/**
 * 問題：
 * オブジェクトの状態をlocalStorageに保存してみましょう。
 * 以下の要件に従ってlocalStorageに状態を保持するオブジェクト
 * を作成してみてください。
 *
 * １．オブジェクトの値が変更された場合に
 * オブジェクトをJSONに変換してlocalStorageに
 * 登録します。localStorageに登録する際のキー
 * は"test-data"としてください。
 *
 * ２．プログラムが実行される際にlocalStorage
 * を指定のキーで検索し、JSONがすでに登録されて
 * いる場合には、そのJSONからオブジェクトを復元し
 * 初期値のオブジェクトとしてください。
 */
const KEY = "test-data";

// const targetObj = { a: 0 };
// const handler = {
//   set: function (target, prop, value, receiver) {
//     console.log(`set ${prop} value:[${value}]`);
//     // target[prop] = value;
//     throw new Error("set error");
//   },
//   get: function (target, prop, value, receiver) {
//     console.log(`get ${prop}`);
//     return target[prop];
//   },
//   deleteProperty: function (target, prop, value, receiver) {
//     console.log(`set ${prop}`);
//     delete target[prop];
//   },
// };

// //
// const obj = { a: 0 };
// const json = JSON.stringify(obj);

// localStorage.setItem("key", json);
// const result = localStorage.getItem("key");
// const obj2 = JSON.parse(result);
// console.log(obj2);
// console.log("end");

// const pxy = new Proxy(targetObj, handler);

class DataSource {
  static getLocal(KEY) {
    console.log("get from local");
    const result = localStorage.getItem(KEY);
    return JSON.parse(result);
  }

  static setLocal(KEY, target) {
    console.log("set to local");
    const json = JSON.stringify(target);
    // console.log(KEY, json, "aaa");
    localStorage.setItem(KEY, json);
  }
}

// function getLocal(KEY) {
//   const result = localStorage.getItem(KEY);
//   // console.log(result);
//   return JSON.parse(result);
// }

// const targetObj = getLocal(KEY) || {};
const targetObj = DataSource.getLocal(KEY) || {};

const pxy = new Proxy(targetObj, {
  set(target, prop, value, receiver) {
    const result = Reflect.set(target, prop, value, receiver);
    // console.log(target, prop, value, receiver);
    // const json = JSON.stringify(target);
    // console.log(KEY, json, "aaa");
    // localStorage.setItem(KEY, json);
    DataSource.setLocal(KEY, target);
    return result;
  },
});

console.log("init", pxy);
pxy.name = "Tom";
console.log("change", pxy);
pxy.name = "Sun";
console.log("change2", pxy);
// pxy.name = "Tim";
