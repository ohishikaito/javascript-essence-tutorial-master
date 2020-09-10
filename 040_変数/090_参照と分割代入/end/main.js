const a = {
  prop: 0,
};

let { prop } = a;

prop = 10;

console.log(a, prop);

function fn({ prop }) {
  prop = 20;
  console.log(a, prop);
}

fn(a);

const c = {
  prop1: {
    prop2: 30,
  },
};

let { prop1 } = c;

prop1.prop2 = 40;

console.log(c, prop1);

let d = c;
// d.prop1 = 50;
console.log(d);
