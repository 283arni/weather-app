import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './location-item.css';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';
import { Heigth } from '../../const';

const LocationItem = ({ city, onHeightContainerChange, onCityClick }) => {
  return (
    <li
      className="location__item"
    >
      <Link
        to="/details"
        className="location__link"
        onClick={() => {
          onCityClick(city);
          onHeightContainerChange(Heigth.MIN);
        }}
      >
        <span className="location__name">{city.name}</span>
        <span className="location__temperature">
          {city.main.temp}
          <span className="celsius">&#176;C</span>
        </span>
      </Link>
    </li>
  );
};

LocationItem.propTypes = {
  city: PropTypes.shape(cityType),
  onCityClick: PropTypes.func.isRequired,
  onHeightContainerChange: PropTypes.func.isRequired
};

LocationItem.defaultProps = {
  city: defaultCity
};

export default LocationItem;
