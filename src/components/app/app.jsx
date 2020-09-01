import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Location from '../location/location';
import CityInfo from '../city-info/city-info';
import { getCities, getCity } from '../../reducers/selector';

import { Operation, ActionCreator } from '../../reducers/data';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';
import './app.css';

class App extends PureComponent {
  // need refactoring
  static changeBackgroundImage(city) {
    console.log(city);
    if (city && (new Date(city.dt).getHours() >= 20 || new Date(city.dt).getHours() <= 5)) {
      return "url('public/images/graphic-night.svg')";
    }
    if (!city || city.dt) {
      return "url('public/images/graphic.svg')";
    }

    return "url('public/images/graphic.svg')";
  }

  constructor(props) {
    super(props);

    this._weather = React.createRef();
  }

  render() {
    const {
      cities,
      city,
      onFormSubmit,
      onCityClick
    } = this.props;
    console.log(this._weather);
    return (
      <div className="wrapper">
        <div
          ref={this._weather}
          className="weather"
          style={{
            backgroundImage: this.changeBackgroundImage(city)
          }}
        >
          <div className="weather__container">
            <BrowserRouter>
              <Switch>
                <Route path="/" exact>
                  <Location
                    cities={cities}
                    onFormSubmit={onFormSubmit}
                    onCityClick={onCityClick}
                  />
                </Route>
                <Route path="/details" exact>
                  <CityInfo
                    city={city}
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
  city: PropTypes.shape(cityType),
  onFormSubmit: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired
};

App.defaultProps = {
  city: defaultCity
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cities: getCities(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(city, cities) {
    dispatch(Operation.loadCity(city, cities));
  },
  onCityClick(city) {
    dispatch(ActionCreator.getCity(city));
  }
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
