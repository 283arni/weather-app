import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Location from '../location/location';
import CityInfo from '../city-info/city-info';
import { getCities, getConvertCity } from '../../reducers/selector';

import { Operation } from '../../reducers/data';
import './app.css';

class App extends PureComponent {
  render() {
    const { cities, city, onFormSubmit } = this.props;

    return (
      <div className="wrapper">
        <div className="weather">
          <div className="weather__container">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact>
                  <CityInfo
                    city={city}
                  />
                </Route>
                <Route path="/location" exact>
                  <Location
                    cities={cities}
                    onFormSubmit={onFormSubmit}
                  />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,
  city: PropTypes.shape().isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  city: getConvertCity(state),
  cities: getCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(city, cities) {
    dispatch(Operation.loadCity(city, cities));
  }
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
