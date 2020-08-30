import React from 'react';
import PropTypes from 'prop-types';

import './location-form.css';

const LocationForm = ({ onLocationSubmit, onLocationChange }) => {
  return (
    <form
      className="location__form"
      action="#"
      onSubmit={(e) => onLocationSubmit(e)}
    >
      <input
        type="text"
        className="location__search"
        placeholder="name city"
        onChange={(e) => onLocationChange(e)}
      />
    </form>
  );
};

LocationForm.propTypes = {
  onLocationSubmit: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired
};

export default LocationForm;
