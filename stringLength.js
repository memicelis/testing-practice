const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) return string.length;
  else {
    throw new Error('String is empty or longer than characters');
  }
};

module.exports = stringLength;
