const {
  removeCapitalLetters,
  capitalizeLetters,
  reverseStr,
  transform
} = require('./transform');

jest.mock('fs', () => ({
  promises: {
    readFile() {
      return Promise.resolve('Hi There');
    }
  }
}));

describe('transform', () => {

  it('can transform a files text', () => {
    return transform('/path/to/file')
      .then(str => {
        expect(str).toBe('EREH I');
      });
  });

  describe('removeCapitalLetters', () => {
    it('can remove capital letters', () => {
      expect(removeCapitalLetters('Hi There'))
        .toBe('i here');
    });
  });

  describe('capitalizeLetters', () => {
    it('can capitalize letters', () => {
      expect(capitalizeLetters('i here'))
        .toBe('I HERE');
    });
  });

  describe('reverseStr', () => {
    it('can reverse a string', () => {
      expect(reverseStr('I HERE'))
        .toBe('EREH I');
    });
  });
});
