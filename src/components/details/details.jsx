import React from 'react';
import DetailsMain from '../details-main/details-main';
import DetailsList from '../details-list/details-list';
import SliderWeek from '../slider-week/slider-week';

const Details = () => {
  return (
    <main className="details">
      <DetailsMain />
      <DetailsList />
      <SliderWeek />
    </main>
  );
};

export default Details;
