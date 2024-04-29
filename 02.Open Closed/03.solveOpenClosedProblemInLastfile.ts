abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract drawShape(): void;
}

class Circle extends Shape {
  radius: number;
  constructor(name: string, radius: number) {
    super(name);
    this.radius = radius;
  }

  drawShape() {
    console.log("Circle");
  }
}

class RectangleClass extends Shape {
  height: number;
  width: number;
  constructor(name: string, height: number, width: number) {
    super(name);
    this.height = height;
    this.width = width;
  }

  drawShape() {
    console.log("Rectangle");
  }
}
