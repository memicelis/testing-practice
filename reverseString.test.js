const reverseString = require('./reverseString');

test('Reverse String', () => {
  //act
  const string = 'house';

  //arrange
  const result = reverseString(string);

  //assert

  expect(result).toBe('esuoh');
});
