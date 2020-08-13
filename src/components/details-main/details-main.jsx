import React from 'react';
import CloudIcon from '../../images/cloud.svg';

const DetailsMain = () => {
  return (
    <div className="details__main">
      <div className="details__sky">
        <img src={CloudIcon} alt="" className="details__sky-icon" />
        <span className="details__sky-title">Sunny</span>
      </div>
      <div className="details__temperature">
        <span className="details__temperature-number">33</span>
      </div>
      <div className="details__interval">
        <span className="details__interval-max">35C</span>
        <span className="details__interval-min">27C</span>
      </div>
    </div>
  );
};

export default DetailsMain;
