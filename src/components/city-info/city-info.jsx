import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Details from '../details/details';
import SliderWeek from '../slider-week/slider-week';

import './city-info.css';

const CityInfo = ({ city }) => {
  return (
    <>
      <Header
        city={city}
      />
      <Details />
      <SliderWeek />
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.shape().isRequired
};

export default CityInfo;
