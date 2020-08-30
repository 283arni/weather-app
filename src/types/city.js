import PropTypes from 'prop-types';

const cityType = {
  coord: PropTypes.shape({
    lon: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired
  }).isRequired,
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      main: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  base: PropTypes.string.isRequired,
  main: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    pressure: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired
  }).isRequired,
  visibility: PropTypes.number.isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.string.isRequired,
    deg: PropTypes.number.isRequired
  }).isRequired,
  clouds: PropTypes.shape({
    all: PropTypes.number.isRequired
  }).isRequired,
  dt: PropTypes.string.isRequired,
  sys: PropTypes.shape({
    type: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    message: PropTypes.number,
    country: PropTypes.string.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired
  }).isRequired,
  timezone: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  cod: PropTypes.number.isRequired
};

export default cityType;
