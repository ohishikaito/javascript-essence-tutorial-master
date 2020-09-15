function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// Promise.allSettled([sleep(2), sleep(3), sleep(4)])
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (e) {
//     console.error(e);
//   });
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function (data) {
  console.log(data);
});
// sleep(0)
//   .then(function (val) {
//     console.log(val);
//     return Promise.all([sleep(2), sleep(3), sleep(4)]);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });
