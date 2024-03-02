class Circle {
  static allCircles = [];

  constructor(radius) {
    this.radius = radius;
    Circle.allCircles.push(this);
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  // static
  static getAreaFormula() {
    return "圓面積公式為pi * r * r";
  }

  // static method
  static getAllCirclesAreaTotal() {
    let total = 0;
    Circle.allCircles.forEach((circle) => {
      total += circle.getArea();
    });
    return total;
  }
}

let c1 = new Circle(5);
let c2 = new Circle(10);
let c3 = new Circle(15);
console.log(Circle.getAllCirclesAreaTotal());
