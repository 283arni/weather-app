import React from 'react';
import PropTypes from 'prop-types';

import cityType from '../../types/city';
import defaultCity from '../../mocks/city';
import './details-list.css';

const DetailsList = ({ city }) => {
  const items = {
    Humidity: city.main.humidity,
    Pressure: city.main.pressure,
    Wind: city.wind.speed,
    Sunrise: city.sys.sunrise,
    Sunset: city.sys.sunset,
    Daytime: `${(parseInt(city.sys.sunset, 10) - parseInt(city.sys.sunrise, 10)) + 12}h`
  };
  return (
    <ul className="details__list">
      {
        Object.entries(items).map((item) => {
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
        })
      }
    </ul>
  );
};

DetailsList.propTypes = {
  city: PropTypes.shape(cityType)
};

DetailsList.defaultProps = {
  city: defaultCity
};

export default DetailsList;
