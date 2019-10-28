const fs = require('fs').promises;

Promise.rejct({ name: 'spot' })
  .catch(fulfilledValue => console.log(fulfilledValue))

const getCharacters = () => {
  return Promise.resolve([
    {},
    {},
    {}}
  ]);
};
