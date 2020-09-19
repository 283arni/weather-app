import React from 'react';

import LocationList from '../location-list/location-list';
import LocationForm from '../location-form/location-form';
import withLocationForm from '../../hocs/with-location-form';
import './location.css';

const LocationFormWrapper = withLocationForm(LocationForm);

const Location = () => {
  return (
    <div className="location">
      <h2 className="location__title">Location</h2>
      <LocationFormWrapper />
      <LocationList />
    </div>
  );
};

export default Location;
