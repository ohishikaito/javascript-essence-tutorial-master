class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello = function () {
    console.log("hello " + this.name);
  };
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }

  hello = function () {
    console.log("Konnichiwa " + this.name);
  };

  bye = function () {
    console.log("Sayonara " + this.name);
  };
}

const taro = new Japanese("Taro", 23, "Male");
console.log(taro);
taro.bye();
