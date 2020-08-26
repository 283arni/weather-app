import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './location.css';

class Location extends PureComponent {
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
    const { cities } = this.props;
    return (
      <form
        className="location"
        action="#"
        method="post"
        onSubmit={(e) => this.handleLocationSubmit(e)}
      >
        <h2 className="location__title">Location</h2>
        <input
          type="text"
          className="location__search"
          placeholder="Mumbai"
          onChange={(e) => this.handleLocationChange(e)}
        />
        <ul className="location__list">
          {cities.length ? cities.map((city) => (
            <li
              className="location__item"
              key={city.id}
            >
              <span className="location__name">{city.name}</span>
              <span className="location__temperature">
                {city.main.temp}
                <span className="celsius">&#176;C</span>
              </span>
            </li>
          )) : null}
        </ul>
      </form>
    );
  }
}

Location.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.any
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default Location;
