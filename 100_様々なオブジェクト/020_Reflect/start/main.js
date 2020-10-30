class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// const obj1 = new C(1, 2);
// console.log(obj1);
// const obj2 = Reflect.construct(C, [1, 2]);
// console.log(obj2);

// // console.log("a" in obj1);
// console.log(Reflect.has(obj1, "c"));

// if (Reflect.defineProperty) {
//   console.log("aa");
// } else {
//   console.log("bb");
// }

const bob = {
  name: "Bob",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
};

const tom = {
  name: "Tom",
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    return this._hello();
  },
};

tom.hello;
Reflect.get(tom, "hello", bob);
