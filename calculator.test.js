// calculator.test.js
const calc = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
    expect(calc.add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
    expect(calc.subtract(5, 2)).toBe(3);
});

test('multiplies 4 * 3 to equal 12', () => {
    expect(calc.multiply(4, 3)).toBe(12);
});

test('divides 6 / 2 to equal 3', () => {
    expect(calc.divide(6, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
    expect(() => calc.divide(4, 0)).toThrow('Cannot divide by zero');
});
   


