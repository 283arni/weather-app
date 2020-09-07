import { extend } from '../../utils';
import { keyApi } from '../../const';
import WeatherModel from '../../adapters/weather-model';

const initialState = {
  city: null,
  cities: [],
  weatherDays: []
};

const Action = {
  GET_CITY: 'GET_CITY',
  ADD_CITY: 'ADD_CITY',
  GET_WATHER_DAYS: 'GET_WATHER_DAYS'
};

const ActionCreator = {
  getCity: (city) => ({
    type: Action.GET_CITY,
    payload: city
  }),
  addCity: (city, cities) => ({
    type: Action.ADD_CITY,
    payload: [...cities, city]
  }),
  getWeatherDays: (weather) => ({
    type: Action.GET_WATHER_DAYS,
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
    case Action.GET_CITY:
      return extend(state, {
        city: action.payload
      });
    case Action.ADD_CITY:
      return extend(state, {
        cities: action.payload
      });
    case Action.GET_WATHER_DAYS:
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
