const { Circle, Rectangle, Square, Triangle, createShape } = require('./shapes');

describe('Circle', () => {
  test('should calculate the area correctly', () => {
    const circle = new Circle(5);
    expect(circle.area).toBeCloseTo(78.54, 2);
  });

  test('should calculate the circumference correctly', () => {
    const circle = new Circle(5);
    expect(circle.circumference).toBeCloseTo(31.42, 2);
  });

  test('should draw a circle correctly', () => {
    const circle = new Circle(5);
    const svg = circle.draw(100);
    expect(svg).toContain('<circle');
    expect(svg).toContain('cx="50"');
    expect(svg).toContain('cy="50"');
    expect(svg).toContain('r="5"');
  });
});

describe('Rectangle', () => {
  test('should calculate the area correctly', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.area).toBe(50);
  });

  test('should calculate the perimeter correctly', () => {
    const rectangle = new Rectangle(5, 10);
    expect(rectangle.perimeter).toBe(30);
  });

  test('should draw a rectangle correctly', () => {
    const rectangle = new Rectangle(5, 10);
    const svg = rectangle.draw(100);
    expect(svg).toContain('<rect');
    expect(svg).toContain('x="0"');
    expect(svg).toContain('y="0"');
    expect(svg).toContain('width="100"');
    expect(svg).toContain('height="100"');
  });
});

describe('Square', () => {
    test('should calculate the area correctly', () => {
      const square = new Square(5);
      expect(square.area).toBe(25);
    });
  
    test('should calculate the perimeter correctly', () => {
      const square = new Square(5);
      expect(square.perimeter).toBe(20);
    });
  
    test('should draw a square correctly', () => {
      const square = new Square(5);
      const svg = square.draw(100);
      expect(svg).toContain('<rect');
      expect(svg).toContain('x="0"');
      expect(svg).toContain('y="0"');
      expect(svg).toContain('width="5"');
      expect(svg).toContain('height="5"');
    });
  });
  