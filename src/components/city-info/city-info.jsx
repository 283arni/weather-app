import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Details from '../details/details';
import SliderWeek from '../slider-week/slider-week';

import './city-info.css';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';

const CityInfo = ({ city, onHeightContainerChange }) => {
  return (
    <>
      <Header
        city={city}
        onHeightContainerChange={onHeightContainerChange}
      />
      <Details
        city={city}
      />
      <SliderWeek />
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.shape(cityType),
  onHeightContainerChange: PropTypes.func.isRequired
};

CityInfo.defaultProps = {
  city: defaultCity
};

export default CityInfo;
