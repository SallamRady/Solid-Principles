class CircleC {
  constructor(r) {
    this.name = "Circle";
    this.r = r;
  }
}

class RectangleC {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class SquareC {
  constructor(l) {
    this.name = "Square";
    this.l = l;
  }
}

//! This class to respect Open Closed principle.
class ShapePrinter {
  drawShape(shape) {
    if (shape instanceof RectangleC) console.log("Rectangle");
    else if (shape instanceof SquareC) console.log("Square");
    else if (shape instanceof CircleC) console.log("Circle");
  }
}
