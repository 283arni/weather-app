import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Location from '../location/location';
import CityInfo from '../city-info/city-info';
import { getCities, getCity } from '../../reducers/selector';

import './app.css';

class App extends PureComponent {
  render() {
    const { cities, city } = this.props;

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
    PropTypes.array
  ).isRequired,
  city: PropTypes.shape().isRequired
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cities: getCities(state)
});

export { App };
export default connect(mapStateToProps, null)(App);
