import { useState, useEffect } from 'react';
import { getQuotes } from '../services/futuramaApi';

const useQuotes = (number = 10) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getQuotes(number)
      .then(fetchedQuotes => {
        setQuotes(fetchedQuotes);
        setLoading(false);
      });
  }, [number]);

  return { quotes, loading };
};

export default useQuotes;
