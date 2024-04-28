/**
 * * Achieve Single Responsibility Principle
 * * Each class has only reponsilpility and only reason to change.
 */
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class RectangleArea {
  static calcArea(width, height) {
    return width * height;
  }
}

class RectanglePerimeter {
  static calcPerimeter(width, height) {
    return (width + height) * 2;
  }
}

class RectanglePrintCoordinates {
  static showCoordinates(width, height) {
    console.log("---------------------");
    console.log("Rectangle Coordinates");
    console.log("#  Width   ::", width);
    console.log("#  Height   ::", height);
    console.log("---------------------");
  }
}
