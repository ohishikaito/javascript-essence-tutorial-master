function Person1(name, age) {
  this._name = name;
  this._age = age;
}

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    console.log("get");
    return this._name;
  },
  set: function (val) {
    console.log("set");
    this._name = val;
  },
});

const p1 = new Person1("Bob", 23);
console.log(p1.name);
p1.name = "Tom";
console.log(p1.name);

class Person2 {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    console.log("get");
    return this._name;
  }
  set name(val) {
    console.log("set");
    this._name = val;
  }

  static hello() {
    console.log("hello");
  }
}
const p2 = new Person2("Gucci", 114514);
Person2.hello();
