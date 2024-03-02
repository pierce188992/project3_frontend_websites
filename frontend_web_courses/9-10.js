// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(this.name + "說你好");
// };

// function Student(name, age, major, grade) {
//   Person.call(this, name, age);
//   this.major = major;
//   this.grade = grade;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function () {
//   console.log(this.name + "正在努力讀" + this.major);
// };

// let mike = new Student("Mike Huang", 26, "Chemistry", 3.5);
// mike.sayHi();
// mike.study();

// function Student(name, age, major) {
//   this.name = name;
//   this.age = age;
//   this.major = major;
// }

// Student.prototype.sayHi = function () {
//   console.log(this.name + "說你好");
// };

// class Student {
//   constructor(name, age, major) {
//     this.name = name;
//     this.age = age;
//     this.major = major;
//   }

//   sayHi() {
//     console.log(this.name + "說你好");
//   }
// }
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(this.name + "說你好");
//   }
// }

// // super
// class Student extends Person {
//   constructor(name, age, major, grade) {
//     super(name, age);
//     this.major = major;
//     this.grade = grade;
//   }

//   study() {
//     console.log(this.name + "正在努力讀" + this.major);
//   }
// }

// let mike = new Student("Mike Huang", 26, "Chemistry", 3.5);
// mike.sayHi();
// mike.study();

// function Student(name, age, major) {
//   this.name = name;
//   this.age = age;
//   this.major = major;
// }

// Student.exampleProperty = 10;

// Student.exampleFunction = function () {
//   console.log("這是一個沒有特別功能的function");
// };

// Student.prototype.sayHi = function () {
//   console.log(this.name + "說你好");
// };

class Student {
  static exampleProperty = 10; // static property

  constructor(name, age, major) {
    this.name = name; // instance property
    this.age = age; // instance property
    this.major = major; // instance property
  }

  // instance method
  sayHi() {
    console.log(this.name + "說你好");
  }

  // static method
  static exampleFunction() {
    console.log("這是一個沒有特別功能的function");
  }
}

let mike = new Student("Mike", 26, "chemistry");
Student.exampleFunction();
