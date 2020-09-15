function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
      // resolve(val + "  unti");
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error();
  return val;
  // console.log(val);
}

init()
  .then(function (val) {
    console.log("hi " + val);
  })
  .catch(function (e) {
    console.error(e);
  });
// console.log(init());

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
