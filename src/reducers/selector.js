// import { createSelector } from 'reselect';
// import WeatherModel from '../adapters/weather-model';

const getCities = (state) => {
  return state.cities;
};

const getCity = (state) => {
  return state.city;
};

// const getConvertCity = createSelector(
//   getCity,
//   (city) => {
//     return city ? WeatherModel.parseWeather(city) : city;
//   }
// );

export { getCities, getCity };
