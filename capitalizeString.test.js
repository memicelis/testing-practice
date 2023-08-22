const capitalizeString = require('./capitalizeString');

test('Capitalize String', () => {
  const string = 'object';

  const result = capitalizeString(string);

  expect(result).toBe('Object');
});
