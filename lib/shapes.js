// Circle class
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  draw(size) {
    return `<svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${this.radius}" />
    </svg>`;
  }
}

// Rectangle class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  draw(size) {
    return `<svg width="${size}" height="${size}">
      <rect x="0" y="0" width="${this.width}" height="${this.height}" />
    </svg>`;
  }
}

class Square extends Rectangle{
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  get area() {
    return this.side ** 2;
  }

  get perimeter() {
    return this.side * 4;
  }

  draw(scale) {
    const sideLength = this.side * scale / 100;
    const svg = `<svg width="${sideLength}" height="${sideLength}">
              <rect x="0" y="0" width="${sideLength}" height="${sideLength}" />
            </svg>`;
    return svg;
  }
  
}

class Triangle {
  constructor(base, height, side1, side2, side3) {
    this.base = base;
    this.height = height;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get area() {
    return 0.5 * this.base * this.height;
  }

  get perimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  draw(size) {
    return `<svg width="${size}" height="${size}">
      <polygon points="${size / 2},${size * 0.1} ${size * 0.9},${size * 0.9} ${size * 0.1},${size * 0.9}" />
    </svg>`;
  }
}

function createShape(shape, shapeColor, textColor) {
  switch (shape) {
    case 'circle':
      return new Circle(50);
    case 'rectangle':
      return new Rectangle(75, 50);
    case 'square':
      const square = new Square(50);
      return square.draw(100 / square.side);
    case 'triangle':
      return new Triangle(75, 50);
    default:
      throw new Error('Invalid shape');
  }
}

module.exports = {
  Circle: Circle,
  Rectangle: Rectangle,
  Square: Square,
  Triangle: Triangle,
  createShape: createShape
};
