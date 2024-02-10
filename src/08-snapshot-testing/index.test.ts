import { generateLinkedList } from './index';

const data = ['value1', 'value2', 'value3'];
const expectedResult = {
  value: 'value1',
  next: {
    value: 'value2',
    next: {
      value: 'value3',
      next: {
        value: null,
        next: null
      }
    }
  }
};

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(data)).toStrictEqual(expectedResult);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    expect(generateLinkedList(data)).toMatchSnapshot();
  });
});
