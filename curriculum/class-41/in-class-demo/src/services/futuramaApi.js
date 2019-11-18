export const fetchQuote = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([{ character, image, quote }]) => {
      return { name: character, img: image, text: quote };
    });
};
