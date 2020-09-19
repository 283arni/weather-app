import React from 'react';

import Header from '../header/header';
import Details from '../details/details';
import SliderWeek from '../slider-week/slider-week';

import './city-info.css';

const CityInfo = () => {
  return (
    <>
      <Header />
      <Details />
      <SliderWeek />
    </>
  );
};

export default CityInfo;
