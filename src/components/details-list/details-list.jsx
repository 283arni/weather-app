import React from 'react';

import './details-list.css';

const items = ['Humidity', 'Pressure', 'Wind', 'Sunrise', 'Sunset', 'Daytime'];

const DetailsList = () => {
  return (
    <ul className="details__list">
      {
        items.map((item) => {
          return (
            <li
              className="details__item"
              key={item}
            >
              <img src={`images/${item.toLowerCase()}.svg`} alt="icon" className="details__icon" />
              <div className="details__value">49%</div>
              <h3 className="details__title">{item}</h3>
            </li>
          );
        })
      }
    </ul>
  );
};

export default DetailsList;
