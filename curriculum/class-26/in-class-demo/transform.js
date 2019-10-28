const fs = require('fs').promises;

const removeCapitalLetters = str => {
  // ['H', 'i', ' ', 'T', 'h', 'e', 'r', 'e']
  // return str.split('')
  //   .reduce((acc, val) => {
  //     if (val === ' ' || val.toUpperCase() !== val) {
  //       acc.push(val);
  //     }
  //     return acc;
  //   }, [])
  //   .join('');
  return str.match(/[a-z, ]/g).join('');
  // return str.split('')
  //   .filter(letter => letter.toLowerCase() === letter)
  //   .join('');
};

const capitalizeLetters = str => {
  // return str.split('')
  //   .map(letter => {
  //     return letter.toUpperCase();
  //   })
  //   .join('');
  return str.toUpperCase();
}

const reverseStr = str => {
  return str.split('')
    .reverse()
    .join('');
}

const transform = path => {
  return fs.readFile(path, 'utf8')
    .then(removeCapitalLetters)
    .then(capitalizeLetters)
    .then(reverseStr);
}

module.exports = {
  removeCapitalLetters,
  capitalizeLetters,
  reverseStr,
  transform
};
