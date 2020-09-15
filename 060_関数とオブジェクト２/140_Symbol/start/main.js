const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(s);
console.log(s2);

const str = new String("Tom");
console.log(str);

String.prototype[s] = function () {};
