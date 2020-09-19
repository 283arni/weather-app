import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Operation } from '../reducers/data/data';
import { getCities } from '../reducers/data/selector';

const withLocationForm = (Component) => {
  class WithLocationForm extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        locationName: ''
      };
    }

    handleLocationSubmit(e) {
      e.preventDefault();

      const { onFormSubmit, cities } = this.props;
      const { locationName } = this.state;

      onFormSubmit(locationName, cities);
    }

    handleLocationChange(e) {
      this.setState({
        locationName: e.target.value
      });
    }

    render() {
      return (
        <Component
          onLocationSubmit={(e) => this.handleLocationSubmit(e)}
          onLocationChange={(e) => this.handleLocationChange(e)}
        />
      );
    }
  }

  WithLocationForm.propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.any
    ).isRequired,
    onFormSubmit: PropTypes.func.isRequired
  };

  const mapStateToProps = (state) => ({
    cities: getCities(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    onFormSubmit(city, cities) {
      dispatch(Operation.loadCity(city, cities));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithLocationForm);
};

export default withLocationForm;
