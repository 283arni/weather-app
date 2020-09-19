import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LocationItem from '../location-item/location-item';

import { getCities } from '../../reducers/data/selector';
import { ActionCreator } from '../../reducers/data/data';
import { ActionCreator as SiteActionCreator } from '../../reducers/site/site';

const LocationList = ({ cities, onHeightContainerChange, onCityClick }) => {
  return (
    <ul className="location__list">
      {cities.length ? cities.map((city) => (
        <LocationItem
          key={city.id}
          city={city}
          onHeightContainerChange={onHeightContainerChange}
          onCityClick={onCityClick}
        />
      )) : null}
    </ul>
  );
};

LocationList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,
  onCityClick: PropTypes.func.isRequired,
  onHeightContainerChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: getCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.getCity(city));
  },
  onHeightContainerChange(height) {
    dispatch(SiteActionCreator.changeHeight(height));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
