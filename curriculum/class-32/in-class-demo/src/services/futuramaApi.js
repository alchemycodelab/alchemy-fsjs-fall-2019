export const getQuotes = count => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.json())
    .then(quotes => quotes.map(({ character, quote, image }) => ({
      name: character,
      text: quote,
      image
    })));
};
