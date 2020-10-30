/**
 * 問題：
 * 反復操作可能なオブジェクトIteratableObject
 * を作成してみましょう。
 * Arrayと同様に以下のメソッドが使用可能とします。
 *
 * set(key, value)  *1
 * forEach
 * map
 * filter
 *
 * *1:setはチェーンメソッドとしてつなげられるように実装してみてください。
 *
 * また、for...ofを使用した際にはMapと同じ挙動を取るものとします。
 *
 */
class IteratableObject {
  constructor(obj) {
    for (let prop in obj) {
      this[prop] = obj[prop];
    }
  }

  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }

  map(callback) {
    const newInstance = new IteratableObject();
    for (let [k, v] of this) {
      newInstance[k] = callback(v, k, this);
    }
    return newInstance;

    // const newInstance = this;
    // console.log(this.length);
    // for (let i = 0; i < this.length; i++) {
    //   const result = callback(this[i]);
    //   newInstance.push(result);
    // }
    // console.log(newInstance);
    return newInstance;
  }

  set(key, value) {
    this[key] = value;
    return this;
  }

  *[Symbol.iterator]() {
    for (let key in this) {
      yield [key, this[key]];
    }
  }

  filter(callback) {
    const newInstance = new IteratableObject();
    console.log(newInstance);
    for (let [k, v] of this) {
      if (callback(v, k)) {
        // const result = callback(v, k);
        newInstance[k] = v;
      }
    }
    return newInstance;
  }

  forEach(callback) {
    for (let [k, v] of this) {
      callback(v, k, this);
    }
  }
}

function prefix(v, i, obj) {
  return "prefix-" + v;
}

const original = new IteratableObject({
  key1: "value1",
  key2: "value2",
  key3: "value3",
});

for (let [k, v] of original) {
  console.log(k, v);
}

const result = original
  .map(prefix)
  .set("key4", "value4")
  .filter(function (val, key) {
    return key === "key4";
  });

original.forEach((v) => {
  console.log(v);
});

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
/**
 * 期待する出力結果
 * original
 * {key1: "value1", key2: "value2", key3: "value3"}
 *
 * result
 * {key4: "value4"}
 */
