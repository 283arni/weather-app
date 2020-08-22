import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers/data';

import createApi from './api';

import App from './components/app/app';

const api = createApi();

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
