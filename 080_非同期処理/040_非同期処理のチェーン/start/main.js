function sleep(callback, val) {
  setTimeout(function () {
    console.log(val++);
    callback(val);
  }, 1000);
}

sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {
      //
    }, val);
  }, val);
  // console.log("callback done");
}, 0);
