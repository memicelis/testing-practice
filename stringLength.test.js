const stringLength = require('./stringLength');

test('Number of chars', () => {
  //arrange
  const string = 'Historia est magistrae vitae';

  //act
  const result = () => stringLength(string);

  //assert

  expect(result).toThrow(Error);
});

test('Number of chars', () => {
  //arrange
  const string = 'Historia';

  //act
  const result = stringLength(string);

  //assert

  expect(result).toBe(8);
});
