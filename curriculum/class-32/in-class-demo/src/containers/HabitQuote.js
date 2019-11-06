import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../components/quotes/Quotes';
import { getQuotes } from '../services/futuramaApi';

const HabitQuote = ({ match }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getQuotes(match.params.progress)
      .then(fetchedQuotes => {
        setQuotes(fetchedQuotes);
        setLoading(false);
      });
  }, [match.params.progress]);

  if(loading) return <h1>Loading!</h1>; true;

  return (
    <Quotes quotes={quotes} />
  );
};

HabitQuote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      progress: PropTypes.string
    }).isRequired
  }).isRequired
};

export default HabitQuote;

// export default class HabitQuote extends Component {
//   static propTypes = {
//     match: PropTypes.shape({
//       params: PropTypes.shape({
//         progress: PropTypes.string
//       }).isRequired
//     }).isRequired
//   }

//   state = {
//     quotes: [],
//     loading: true
//   }

//   fetchQuotes = () => {
//     return getQuotes(this.props.match.params.progress)
//       .then(quotes => this.setState({ quotes, loading: false }));
//   }

//   componentDidMount() {
//     this.fetchQuotes();
//   }

//   render() {
//     const { progress } = this.props.match.params;
//     // eslint-disable-next-line eqeqeq
//     if (progress == 0) return <img src="https://www.thestampmaker.com/stock_rubber_stamp_images/SSS2_SAD_FACE.jpg" />;
//     const { loading, quotes } = this.state;
//     if (loading) return <h1>Loading!</h1>;

//     return (
//       <Quotes quotes={quotes} />
//     );
//   }
// }
