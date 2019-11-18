import { fetchQuote } from '../services/futuramaApi';
import { createAction } from 'promise-middleware-redux';

// export const SET_QUOTE = 'SET_QUOTE';
// export const SET_QUOTE_LOADING = 'SET_QUOTE_LOADING';
// export const SET_QUOTE_DONE = 'SET_QUOTE_DONE';
export const setQuote = () => dispatch => {
  dispatch({
    type: SET_QUOTE_LOADING
  });

  return fetchQuote()
    .then(quote => {
      dispatch({
        type: SET_QUOTE,
        payload: quote
      });

      dispatch({
        type: SET_QUOTE_DONE
      });
    });
};

// export const setQuotePromise = () => ({
//   type: SET_QUOTE,
//   pendingType: SET_QUOTE_LOADING,
//   fulfilledType: SET_QUOTE_DONE,
//   payload: fetchQuote()
// });

export const [
  setQuotePromise,
  SET_QUOTE,
  SET_QUOTE_LOADING,
  SET_QUOTE_DONE
] = createAction('SET_QUOTE', fetchQuote);
