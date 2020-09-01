import { extend } from '../utils';
import keyApi from '../const';
import WeatherModel from '../adapters/weather-model';

const initialState = {
  city: null,
  cities: [],
  weatherDays: []
};

const Actions = {
  GET_CITY: 'GET_CITY',
  ADD_CITY: 'ADD_CITY',
  GET_WATHER_DAYS: 'GET_WATHER_DAYS'
};

const ActionCreator = {
  getCity: (city) => ({
    type: Actions.GET_CITY,
    payload: city
  }),
  addCity: (city, cities) => ({
    type: Actions.ADD_CITY,
    payload: [...cities, city]
  }),
  getWeatherDays: (weather) => ({
    type: Actions.GET_WATHER_DAYS,
    payload: weather
  })
};

const Operation = {
  loadCity: (city, cities) => (dispatch, getState, api) => {
    return api.get(`/weather?q=${city}&appid=${keyApi}&units=metric`)
      .then((response) => {
        const convertCity = WeatherModel.parseWeather(response.data);
        dispatch(ActionCreator.addCity(convertCity, cities));
      });
  },
  // don`t work, need another api key
  loadWeatherDays: (city) => (dispatch, getState, api) => {
    return api.get(`/forecast/hourly?q=${city}&appid=${keyApi}&units=metric`)
      .then((response) => dispatch(ActionCreator.getWeatherDays(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CITY:
      return extend(state, {
        city: action.payload
      });
    case Actions.ADD_CITY:
      return extend(state, {
        cities: action.payload
      });
    case Actions.GET_WATHER_DAYS:
      return extend(state, {
        weatherDays: action.payload
      });
    default:
      return state;
  }
};

export {
  reducer,
  Operation,
  initialState,
  ActionCreator
};
