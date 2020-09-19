import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Location from '../location/location';
import CityInfo from '../city-info/city-info';
import { getCity } from '../../reducers/data/selector';
import { getHeightContainer } from '../../reducers/site/selector';

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
      city,
      heightContainer
    } = this.props;

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
                <Route path="/" exact component={Location} />
                <Route path="/details" exact component={CityInfo} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  city: PropTypes.shape(cityType),
  heightContainer: PropTypes.number.isRequired
};

App.defaultProps = {
  city: defaultCity
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  heightContainer: getHeightContainer(state)
});

export { App };
export default connect(mapStateToProps)(App);
