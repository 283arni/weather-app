import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCity } from '../../reducers/data/selector';
import { ActionCreator as SiteActionCreator } from '../../reducers/site/site';
import cityType from '../../types/city';
import defaultCity from '../../mocks/city';
import { Heigth } from '../../const';
import './header.css';

const Header = ({ city, onHeightContainerChange }) => {
  return (
    <header className="header">
      <div className="header__date">
        <span className="header__time">{city.dt}</span>
      </div>
      <div className="header__location">
        <Link
          to="/"
          className="header__city"
          onClick={() => onHeightContainerChange(Heigth.MAX)}
        >
          {city.name}
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  city: PropTypes.shape(cityType),
  onHeightContainerChange: PropTypes.func.isRequired
};

Header.defaultProps = {
  city: defaultCity
};

const mapStateToProps = (state) => ({
  city: getCity(state)
});

const mapDispatchToProps = (dispatch) => ({
  onHeightContainerChange(height) {
    dispatch(SiteActionCreator.changeHeight(height));
  }
});

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
