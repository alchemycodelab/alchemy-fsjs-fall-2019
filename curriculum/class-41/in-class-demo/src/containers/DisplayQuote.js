import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quote from '../components/quote/Quote';
import More from '../components/quote/More';
import { setQuote } from '../actions/quoteActions';
import { getQuote } from '../selectors/quoteSelectors';

export default function DisplayQuote() {
  const quote = useSelector(getQuote);
  const dispatch = useDispatch();

  const moreQuotes = () => dispatch(setQuote());

  useEffect(() => {
    moreQuotes();
  }, []);

  return (
    <>
      <Quote quote={quote} />
      <More more={moreQuotes} />
    </>
  );
}
