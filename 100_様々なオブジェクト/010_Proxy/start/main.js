const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`set ${prop} value:[${value}]`);
    // target[prop] = value;
    throw new Error("set error");
  },
  get: function (target, prop, value, receiver) {
    console.log(`get ${prop}`);
    return target[prop];
  },
  deleteProperty: function (target, prop, value, receiver) {
    console.log(`set ${prop}`);
    delete target[prop];
  },
};
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
pxy.b;
delete pxy.c;
