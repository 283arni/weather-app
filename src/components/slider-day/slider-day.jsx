import React from 'react';
import PropTypes from 'prop-types';

import './slider-day.css';
import dayType from '../../types/day';
import days from '../../mocks/days';

const SliderDay = ({ day }) => {
  return (
    <li
      className="slider__item"
    >
      <img src={day.icon} alt="icon" className="slider__icon" />
      <span className="slider__day">{day.date}</span>
      <div className="slider__temperatures">
        <span className="slider__temperature-max">
          {`${day.tempMax}`}
          <span className="celsius">&#176;C&#8595;</span>
        </span>
        <span className="slider__temperature-min">
          {`${day.tempMin}`}
          <span className="celsius">&#176;C&#8593;</span>
        </span>
      </div>
    </li>
  );
};

SliderDay.propTypes = {
  day: PropTypes.shape(dayType)
};

SliderDay.defaultProps = {
  day: days[0]
};

export default SliderDay;
