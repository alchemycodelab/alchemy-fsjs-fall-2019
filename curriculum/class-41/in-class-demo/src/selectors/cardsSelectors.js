export const getCards = state => state.cards.list;
export const getCardsLoading = state => state.cards.loading;
export const getCard = (state, id) => state.cards.list.find(card => card.id === id);
