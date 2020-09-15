import "./moduleA.js";

console.log(this + " this1");

const a = 0;

function fn() {
  console.log(this + " this");
  console.log(a + " a");
}
fn();

const obj = {
  fn,
};
obj.fn();
// console.log(fn);

console.log(window.d + " window.d");
