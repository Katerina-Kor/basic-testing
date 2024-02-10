import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
    { a: 10, b: 2, action: Action.Subtract, expected: 8 },
    { a: 3, b: 10, action: Action.Subtract, expected: -7 },
    { a: 2, b: 1, action: Action.Multiply, expected: 2 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 2, b: 7, action: Action.Multiply, expected: 14 },
    { a: 10, b: 2, action: Action.Divide, expected: 5 },
    { a: 3, b: 3, action: Action.Divide, expected: 1 },
    { a: 15, b: 3, action: Action.Divide, expected: 5 },
    { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },  
];

describe('simpleCalculator', () => {
  it.each(testCases)('should work correctly', ({a, b, action, expected}) => {
    expect(simpleCalculator({a, b, action})).toStrictEqual(expected);
  })
});
