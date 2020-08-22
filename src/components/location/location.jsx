import React from 'react';

import './location.css';

const Location = () => {
  return (
    <div className="location">
      <h2 className="location__title">Location</h2>
      <input type="text" className="location__search" placeholder="Mumbai, India" />
      <ul className="location__list">
        <li className="location__item">
          <span className="location__name">Mumbai, India</span>
          <span className="location__temperature">
            36
            <span className="celsius">&#176;C</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Location;
