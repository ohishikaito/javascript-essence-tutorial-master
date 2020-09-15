new Promise(function (resolve, reject) {
  console.log("promise");
  // resolve("hello");
  // resolve("hello");
  setTimeout(function () {
    reject("bye");
  }, 1000);
})
  .then(function (data) {
    console.log("then1 " + data);
    throw new Error();
  })
  .then(function (data) {
    console.log("then2 " + data);
  })
  .catch(function (data) {
    console.log("catch " + data);
  })
  .finally(function () {
    console.log("finally");
  });

console.log("global end");
