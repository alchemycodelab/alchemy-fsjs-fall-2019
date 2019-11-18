import React from 'react';
import PropTypes from 'prop-types';

const CardDetail = ({ name, imageUrl, cmc, text, artist, rarity, setName }) => (
  <section>
    <h2>{name}</h2>
    <img src={imageUrl} />
    <p>{cmc}</p>
    <p>{text} - {artist}</p>
    <p>{rarity}</p>
    <p>{setName}</p>
  </section>
);

CardDetail.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  cmc: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  setName: PropTypes.string.isRequired
};

export default CardDetail;
