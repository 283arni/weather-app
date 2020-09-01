// import { createSelector } from 'reselect';
// import WeatherModel from '../adapters/weather-model';

const getCities = (state) => {
  return state.cities;
};

const getCity = (state) => {
  return state.city;
};

const getWeatherDays = (state) => {
  return state.weatherDays;
};

// const getConvertCity = createSelector(
//   getCity,
//   (city) => {
//     return city ? WeatherModel.parseWeather(city) : city;
//   }
// );

export { getCities, getCity, getWeatherDays };
