// import { createSelector } from 'reselect';
// import WeatherModel from '../adapters/weather-model';
import NameSpace from '../name-space';

const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

const getCity = (state) => {
  return state[NameSpace.DATA].city;
};

const getWeatherDays = (state) => {
  return state[NameSpace.DATA].weatherDays;
};

// const getConvertCity = createSelector(
//   getCity,
//   (city) => {
//     return city ? WeatherModel.parseWeather(city) : city;
//   }
// );

export { getCities, getCity, getWeatherDays };
