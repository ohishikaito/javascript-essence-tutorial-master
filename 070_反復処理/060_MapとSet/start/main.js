const map = new Map();
const key1 = {};

map.set(key1, "value1");
console.log(map.get({}));

const key2 = function () {};
map.set(key2, "value2");
console.log(map.get(key2));

let key3;
map.set((key3 = 0), "value3");
console.log(map.get(key3));
map.delete(key3);
console.log(map.get(key3));

// for (const [k, v] of map) {
//   console.log(k, v);
// }

const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

console.log(s.has(key2));

for (let k of s) {
  console.log(k);
}
