import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const a = 5;
    const b = 4;
    const res = a + b;
    expect(simpleCalculator({a, b, action: Action.Add})).toStrictEqual(res);
  });

  test('should subtract two numbers', () => {
    const a = 5;
    const b = 4;
    const res = a - b;
    expect(simpleCalculator({a, b, action: Action.Subtract})).toStrictEqual(res);
  });

  test('should multiply two numbers', () => {
    const a = 5;
    const b = 4;
    const res = a * b;
    expect(simpleCalculator({a, b, action: Action.Multiply})).toStrictEqual(res);
  });

  test('should divide two numbers', () => {
    const a = 10;
    const b = 5;
    const res = a / b;
    expect(simpleCalculator({a, b, action: Action.Divide})).toStrictEqual(res);
  });

  test('should exponentiate two numbers', () => {
    const a = 2;
    const b = 3;
    const res = a ** b;
    expect(simpleCalculator({a, b, action: Action.Exponentiate})).toStrictEqual(res);
  });

  test('should return null for invalid action', () => {
    const a = 2;
    const b = 2;
    const invalidAction = 'invalid';
    expect(simpleCalculator({a, b, action: invalidAction})).toBeNull;
  });

  test('should return null for invalid arguments', () => {
    const a = 'string'
    const b = 'another string'
    expect(simpleCalculator({a, b, action: Action.Add})).toBeNull;
  });
});
