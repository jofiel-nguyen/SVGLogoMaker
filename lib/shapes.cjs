// Circle class
class Shape{
  constructor(shapeColor,textColor,message){
    this.color =shapeColor;
    this.textColor =textColor;
    this.message =message;
  }
  setcolor(shapeColor){
    this.color = shapeColor;
  }
}
class Circle extends Shape {


  draw() {

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.message}</text>
    
    </svg>`
}
}

class Triangle extends Shape {
  
  draw() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
    <text x="150" y="125" font-size="40" text-anchor="middle" fill= "${this.textColor}">${this.message}</text>
   
    </svg>`
  }
}
class Square extends Shape {
  
  draw() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="40" width="120" height="120" fill="${this.color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill= "${this.textColor}">${this.message}</text>
   
    </svg>`
  }
}

function createShape(shape,color, shapeColor, message) {
  switch (shape) {
    case 'circle':
      return new Circle(color, shapeColor, message);
    case 'square':
      return new Square(color, shapeColor, message);
    case 'triangle':
      return new Triangle(color, shapeColor, message);
    default:
      throw new Error('Invalid shape');
  }
}

module.exports = {
  Circle: Circle,
  Square: Square,
  Triangle: Triangle,
  createShape: createShape
};
