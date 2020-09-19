import React from 'react';
import PropTypes from 'prop-types';

import DetailsItem from '../details-item/details-item';
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
            <DetailsItem
              item={item}
              key={item[0]}
            />
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
