import React from 'react';
import PropTypes from 'prop-types';

import cityType from '../../types/city';
import defaultCity from '../../mocks/city';
import './details-main.css';

const DetailsMain = ({ city }) => {
  return (
    <div className="details__main">
      <div className="details__sky">
        <img src="images/sunny.svg" alt="icon" className="details__sky-icon" />
        <h2 className="details__sky-title">{city.weather[0].main}</h2>
      </div>
      <div className="details__temperature">
        <span className="details__temperature-number">
          {city.main.temp}
          <span className="celsius">&#176;C</span>
        </span>
      </div>
      <div className="details__intervals">
        <span className="details__interval-max">
          {city.main.tempMax}
          <span className="celsius">&#176;C&#8593;</span>
        </span>
        <span className="details__interval-min">
          {city.main.tempMin}
          <span className="celsius">&#176;C&#8595;</span>
        </span>
      </div>
    </div>
  );
};

DetailsMain.propTypes = {
  city: PropTypes.shape(cityType)
};

DetailsMain.defaultProps = {
  city: defaultCity
};

export default DetailsMain;
