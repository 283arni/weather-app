import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LocationForm from '../location-form/location-form';
import withLocationForm from '../../hocs/with-location-form';
import { Heigth } from '../../const';
import './location.css';

const LocationFormWrapper = withLocationForm(LocationForm);

const Location = ({
  cities,
  onFormSubmit,
  onCityClick,
  onHeightContainerChange
}) => {
  return (
    <div className="location">
      <h2 className="location__title">Location</h2>
      <LocationFormWrapper
        cities={cities}
        onFormSubmit={onFormSubmit}
      />
      <ul className="location__list">
        {cities.length ? cities.map((city) => (
          <li
            className="location__item"
            key={city.id}
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
        )) : null}
      </ul>
    </div>
  );
};

Location.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onHeightContainerChange: PropTypes.func.isRequired
};

export default Location;
