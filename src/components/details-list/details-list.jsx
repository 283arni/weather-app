import React from 'react';

const items = [
  {
    name: 'Humidity',
    src: 'images/humidity.svg'
  }
];

const DetailsList = () => {
  const [item] = items;
  return (
    <ul className="details__list">
      <li className="details__item">
        <img src={item.src} alt="Фывфыв" className="details__icon" />
        <div className="details__value">49%</div>
        <h3 className="details__title">{item.name}</h3>
      </li>
    </ul>
  );
};

export default DetailsList;
