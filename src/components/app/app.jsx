import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Location from '../location/location';
import CityInfo from '../city-info/city-info';
import { getCities, getCity } from '../../reducers/data/selector';
import { getHeightContainer } from '../../reducers/site/selector';

import { Operation, ActionCreator } from '../../reducers/data/data';
import { ActionCreator as SiteActionCreator } from '../../reducers/site/site';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';
import { Background } from '../../const';
import './app.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._weather = React.createRef();
    this._weatherContainer = React.createRef();
  }

  handleBackgroundImageChange(city) {
    this.city = city;

    if (city && (new Date(city.dt).getHours() >= 20 || new Date(city.dt).getHours() <= 5)) {
      return Background.NIGHT;
    }

    return Background.LIGHT;
  }

  render() {
    const {
      cities,
      city,
      onFormSubmit,
      onCityClick,
      heightContainer,
      onHeightContainerChange
    } = this.props;
    console.log(this.props);
    return (
      <div className="wrapper">
        <div
          ref={this._weather}
          className="weather"
          style={{
            backgroundImage: this.handleBackgroundImageChange(city)
          }}
        >
          <div
            ref={this._weatherContainer}
            className="weather__container"
            style={{
              marginTop: `${heightContainer}px`
            }}
          >
            <BrowserRouter>
              <Switch>
                <Route path="/" exact>
                  <Location
                    cities={cities}
                    onFormSubmit={onFormSubmit}
                    onCityClick={onCityClick}
                    onHeightContainerChange={onHeightContainerChange}
                  />
                </Route>
                <Route path="/details" exact>
                  <CityInfo
                    city={city}
                    onHeightContainerChange={onHeightContainerChange}
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
  onCityClick: PropTypes.func.isRequired,
  heightContainer: PropTypes.number.isRequired,
  onHeightContainerChange: PropTypes.func.isRequired
};

App.defaultProps = {
  city: defaultCity
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cities: getCities(state),
  heightContainer: getHeightContainer(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(city, cities) {
    dispatch(Operation.loadCity(city, cities));
  },
  onCityClick(city) {
    dispatch(ActionCreator.getCity(city));
  },
  onHeightContainerChange(height) {
    dispatch(SiteActionCreator.changeHeight(height));
  }
});

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
