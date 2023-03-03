const countLetters = require('../dna');

describe('countLetters', () => {
  test('returns the correct count for each letter', () => {
    const result = countLetters('AGCTAGCTAGCT');
    expect(result).toEqual({
      A: 3,
      G: 3,
      C: 3,
      T: 3,
    });
  });
});
