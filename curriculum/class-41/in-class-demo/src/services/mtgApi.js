export const getCards = () => {
  return fetch('https://api.magicthegathering.io/v1/cards?random=true')
    .then(res => res.json())
    .then(({ cards }) => cards.map(card => ({
      ...card,
      imageUrl: card.imageUrl || 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/thumb/f/f8/Magic_card_back.jpg/250px-Magic_card_back.jpg?version=56c40a91c76ffdbe89867f0bc5172888'
    })));
};

export const getCard = id => {
  return fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
    .then(res => res.json())
    .then(({ card }) => ({
      ...card,
      imageUrl: card.imageUrl || 'https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/thumb/f/f8/Magic_card_back.jpg/250px-Magic_card_back.jpg?version=56c40a91c76ffdbe89867f0bc5172888'
    }));
};
