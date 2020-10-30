/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }

  print(label = "") {
    console.log(`%c ${label}`, "color: white; font-weight: 600;", this);
    return this;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  push(value) {
    super.push(value);
    return this;
  }

  map(callback) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i, this);
      // console.log(this);
      newInstance.push(result);
    }
    return newInstance;
  }

  filter(callback) {
    const newInstance = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        // const result = callback(this[i]);
        // console.log(this);
        newInstance.push(this[i]);
      }
    }
    return newInstance;
  }

  reduce(callback, accu) {
    console.log(...this);
    const tmpArry = [...this];
    if (accu === undefined) {
      accu = tmpArry.shift();
    }
    for (let i = 0; i < tmpArry.length; i++) {
      accu = callback(accu, tmpArry[i]);
    }
    console.log(accu, tmpArry);
    return accu;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
  .map(double)
  .print("place1")
  .push(5)
  .filter(function (v, i) {
    return v > 2;
  })
  .reduce(function (accu, curr) {
    return accu + curr;
  });

console.log("%coriginal", "color: white; font-weight: bold;", original);
console.log("%cresult", "color: white; font-weight: bold;", result);
