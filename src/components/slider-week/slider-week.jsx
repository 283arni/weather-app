import React from 'react';

import SliderDay from '../slider-day/slider-day';
import './slider-week.css';
import days from '../../mocks/days';

const SliderWeek = () => {
  return (
    <div className="slider">
      <ul className="slider__list">
        {days.map((day) => {
          return (
            <SliderDay
              day={day}
              key={day.date}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default SliderWeek;
