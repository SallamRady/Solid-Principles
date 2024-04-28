//! This class to respect single responsibility principle.
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.width * this.height;
  }

  calcPerimeter() {
    return (this.width + this.height) * 2;
  }

  showCoordinates() {
    console.log("---------------------");
    console.log("Rectangle Coordinates");
    console.log("#  Width   ::", this.width);
    console.log("#  Height   ::", this.height);
    console.log("---------------------");
  }
}
