import React, { PureComponent } from 'react';

import Header from '../header/header';
import Details from '../details/details';

import './app.css';

class App extends PureComponent {
  render() {
    return (
      <div className="wrapper">
        <div className="weather">
          <Header />
          <Details />
        </div>
      </div>
    );
  }
}

export default App;
