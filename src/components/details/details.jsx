import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DetailsMain from '../details-main/details-main';
import DetailsList from '../details-list/details-list';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';

import { getCity } from '../../reducers/data/selector';

const Details = ({ city }) => {
  return (
    <main className="details">
      <DetailsMain
        city={city}
      />
      <DetailsList
        city={city}
      />
    </main>
  );
};

Details.propTypes = {
  city: PropTypes.shape(cityType)
};

Details.defaultProps = {
  city: defaultCity
};

const mapStateToProps = (state) => ({
  city: getCity(state)
});

export default connect(mapStateToProps)(Details);
