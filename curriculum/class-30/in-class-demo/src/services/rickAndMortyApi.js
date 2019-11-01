export const getCharacters = page => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(({ results: characters }) => characters.map(character => ({
      name: character.name,
      image: character.image
    })));
};
