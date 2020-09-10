function ANF(num) {
  console.log(`num:${num}`);
  function AN(value) {
    console.log(`value:${value}`);
    return num + value;
  }
  return AN;
}

// const add5 = ANF(5);
const add10 = ANF(10); // num = 10
const result = add10(3);
console.log(result);
