import React from 'react';
import PropTypes from 'prop-types';

import './details-item.css';

const DetailsItem = ({ item }) => {
  return (
    <li
      className="details__item"
      key={item[0]}
    >
      <img src={`images/${item[0].toLowerCase()}.svg`} alt="icon" className="details__icon" />
      <div className="details__value">{item[1]}</div>
      <h3 className="details__title">{item[0]}</h3>
    </li>
  );
};

DetailsItem.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.number
  ).isRequired
};

export default DetailsItem;
