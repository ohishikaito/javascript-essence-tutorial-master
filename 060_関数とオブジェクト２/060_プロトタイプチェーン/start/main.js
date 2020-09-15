function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("hello " + this.name);
};

const bob = new Person("Bob", 18);
bob.hello();

const result = bob.hasOwnProperty("name");
console.log(result);
