import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Details from '../details/details';
import SliderWeek from '../slider-week/slider-week';

import './city-info.css';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';

const CityInfo = ({ city }) => {
  return (
    <>
      <Header
        city={city}
      />
      <Details
        city={city}
      />
      <SliderWeek />
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.shape(cityType)
};

CityInfo.defaultProps = {
  city: defaultCity
};

export default CityInfo;
