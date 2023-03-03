const factorial = require('../factorial');

describe('factorial', () => {
  test('returns the correct result for a given number', () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });
});

