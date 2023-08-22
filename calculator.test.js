const Calculator = require('./calculator');

describe('Add', () => {
  test('1+2=4', () => {
    const num1 = 1;
    const num2 = 2;

    const calculator = new Calculator();
    const result = calculator.add(num1, num2);

    expect(result).toBe(3);
  });

  test('5+3=8', () => {
    const num1 = 5;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.add(num1, num2);

    expect(result).toBe(8);
  });

  test('6+1=7', () => {
    const num1 = 6;
    const num2 = 1;

    const calculator = new Calculator();
    const result = calculator.add(num1, num2);

    expect(result).toBe(7);
  });
});

describe('Subtract', () => {
  test('4-3=1', () => {
    const num1 = 4;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.subtract(num1, num2);

    expect(result).toBe(1);
  });

  test('5-3=2', () => {
    const num1 = 5;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.subtract(num1, num2);

    expect(result).toBe(2);
  });

  test('6-1=5', () => {
    const num1 = 6;
    const num2 = 1;

    const calculator = new Calculator();
    const result = calculator.subtract(num1, num2);

    expect(result).toBe(5);
  });
});

describe('Multiply', () => {
  test('4*3=12', () => {
    const num1 = 4;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.multiply(num1, num2);

    expect(result).toBe(12);
  });

  test('5*3=15', () => {
    const num1 = 5;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.multiply(num1, num2);

    expect(result).toBe(15);
  });

  test('6*1=6', () => {
    const num1 = 6;
    const num2 = 1;

    const calculator = new Calculator();
    const result = calculator.multiply(num1, num2);

    expect(result).toBe(6);
  });
});

describe('Divide', () => {
  test('6/3=2', () => {
    const num1 = 6;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.divide(num1, num2);

    expect(result).toBe(2);
  });

  test('15/3=5', () => {
    const num1 = 15;
    const num2 = 3;

    const calculator = new Calculator();
    const result = calculator.divide(num1, num2);

    expect(result).toBe(5);
  });

  test('6/1=6', () => {
    const num1 = 6;
    const num2 = 1;

    const calculator = new Calculator();
    const result = calculator.divide(num1, num2);

    expect(result).toBe(6);
  });
});
