/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */
const calc = (function (val) {
  return {
    plus: function (target) {
      const newVal = val + target;
      console.log(`${val} + ${target} = ${newVal}`);
      val = newVal;
    },
    minus: function (target) {
      const newVal = val - target;
      console.log(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
    multiply: function (target) {
      const newVal = val * target;
      console.log(`${val} x ${target} = ${newVal}`);
      val = newVal;
    },
    divide: function (target) {
      const newVal = val / target;
      console.log(`${val} / ${target} = ${newVal}`);
      val = newVal;
    },
  };
})(10);
// const calc = calcFactory(10);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

// let c = (function () {
//   console.log("called");
//   let privateVal = 0;
//   let publicVal = 10;
//   function publicFn() {
//     console.log("publicFn is called: " + privateVal++);
//   }
//   return {
//     publicVal,
//     publicFn,
//   };
// })();
// c.publicFn();
// c.publicFn();
