const arry1 = [1, 2, 3, 4, 5];
const arry2 = [0, ...arry1, 6];
arry2.push(6);
console.log(arry2);

function sum(...args) {
  let ret = 0;
  for (let v of args) {
    console.log(v);
    ret += v;
  }
  return ret;
}
const result = sum(1, 2, 3, 4);
console.log(result);

Object.prototype[Symbol.iterator] = function* () {
  for (let key in this) {
    yield [key, this[key]];
  }
};

const obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

const arry3 = [...obj1];
// const arry3 = { ...obj1 };
console.log(arry3);
