const handler = {
  get(target, key, receiver) {
    const res = Reflect.set(target, key, receiver);
    return res;
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    // console.log(value);
    trigger();
    return res;
  },
};
function reactive(target) {
  return new Proxy(target, handler);
}
let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
}
function trigger() {
  activeEffect();
}
export { effect, trigger, reactive };
