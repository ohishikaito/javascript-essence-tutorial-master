const moduleA = (function () {
  console.log("IIFE called");

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log("publicFn called: " + publicVal);
  }

  function privateFn() {}

  return {
    publicFn,
    publicVal,
  };
})();

// const moduleB = (function (moduleA) {
const moduleB = (function ({ publicFn: fn, publicVal: val }) {
  // console.log("a");
  fn();
  fn();
  fn();
  // moduleA.publicVal;
  console.log(val++);
  console.log(val++);
  fn();
})(moduleA);
