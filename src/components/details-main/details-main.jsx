import React from 'react';

import './details-main.css';

const DetailsMain = () => {
  return (
    <div className="details__main">
      <div className="details__sky">
        <img src="images/sunny.svg" alt="icon" className="details__sky-icon" />
        <h2 className="details__sky-title">Sunny</h2>
      </div>
      <div className="details__temperature">
        <span className="details__temperature-number">
          33
          <span className="celsius">&#176;C</span>
        </span>
      </div>
      <div className="details__intervals">
        <span className="details__interval-max">
          35
          <span className="celsius">&#176;C&#8593;</span>
        </span>
        <span className="details__interval-min">
          27
          <span className="celsius">&#176;C&#8595;</span>
        </span>
      </div>
    </div>
  );
};

export default DetailsMain;
