import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

export default Header;
