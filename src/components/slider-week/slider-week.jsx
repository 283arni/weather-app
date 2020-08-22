import React from 'react';

import './slider-week.css';
import days from '../../mocks/days';

const SliderWeek = () => {
  return (
    <div className="slider">
      <ul className="slider__list">
        {days.map((day) => {
          return (
            <li
              className="slider__item"
              key={day.date}
            >
              <img src={day.icon} alt="icon" className="slider__icon" />
              <span className="slider__day">{day.date}</span>
              <div className="slider__temperatures">
                <span className="slider__temperature-max">
                  {`${day['temperature-max']}`}
                  <span className="celsius">&#176;C&#8595;</span>
                </span>
                <span className="slider__temperature-min">
                  {`${day['temperature-min']}`}
                  <span className="celsius">&#176;C&#8593;</span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SliderWeek;
