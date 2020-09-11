const person = {
  name: "Tom",
  bye: function () {
    console.log("Bye " + this.name);
  },
  hello: function (greeting) {
    console.log(greeting + " " + this.name);
    return greeting + " " + this.name;
  },
  /**
   * 問題４：
   * 1秒後に"hello Tom"
   * と出力されるような、メソッドを
   * personオブジェクトに追加してみてください。
   *
   * 以下のように使用するものとします。
   * `person.hello1s()`
   * -> 1秒後に"hello Tom"と出力
   *
   * 3通りの方法で実装してみてください。
   * １．bind
   * ２．アロー関数
   * ３．thisを一旦変数に代入
   */
  hello1s() {
    // setTimeout(this.hello.bind(this, "hello"), 1000);
    // setTimeout(this.hello.bind(this, "hello"), 1000);

    // () => {
    //   setTimeout(person.hello.bind(person, "hello"), 1000);
    // };
    // setTimeout(() => {
    //   // person.hello.bind(person, "hello");
    //   this.hello("hello");
    // }, 1000);

    // const abc = this.hello.bind(this, "hello");
    const abc = this;
    setTimeout(abc.hello.bind(this, "hello"), 1000);
  },
  // console.log(person.hello.bind(person))
  // const a = () => console.log('Bye ' + this.name);
  // allow: (person.name) => {
  //     return console.log('hello ' + name);
  // };
};
person.hello1s();
// person.bind();

/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
// setTimeout(person.hello.bind(person, "hello"), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// alert(person.hello("hello"));

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// const hing = person.bye.bind(person);
// setTimeout(person.bye.bind(person), 1000);
