import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__date">
        <span className="header__time">Sunday, 19 May 2019 | 4:30PM</span>
      </div>
      <div className="header__location">
        <span className="header__city">Mumbai, India</span>
      </div>
    </header>
  );
};

export default Header;
