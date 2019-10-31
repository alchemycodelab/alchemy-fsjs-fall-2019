const fs = require('fs').promises;
const http = require('https');

Promise.all([
  get('https://rickandmortyapi.com/api/character/'),
  get('https://rickandmortyapi.com/api/location/')
])
  .then(([{ results: characters }, { results: locations }]) => {
    return {
      characters: characters.map(({ id, name, status, species, image }) => ({ id, name, status, species, image })),
      locations: locations.map(({ id, name, type, dimension }) => ({ id, name, type, dimension }))
    };
  })
  .then(obj => fs.writeFile('./content.json', JSON.stringify(obj)))

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  })
}
