window.name = "John";
const a = () => console.log("Bye " + this.name);
a(); // Bye John
const person = {
  name: "Tom",
  hello() {
    const c = () => console.log("Bye " + this.name);
    c(); // Bye tom
  },
};
person.hello();
function b() {
  const a = () => console.log("Bye " + this.name);
  a();
}
b(); // Bye John
