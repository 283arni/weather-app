import { formatTime } from '../utils';

class WeatherModel {
  constructor(data) {
    this.coord = {
      lon: data.coord.lon,
      lat: data.coord.lat
    };
    this.weather = [
      {
        id: data.weather[0].id,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon
      }
    ];
    this.base = data.base;
    this.main = {
      temp: Math.floor(data.main.temp),
      feelsLike: Math.floor(data.main.feels_like),
      tempMin: Math.floor(data.main.temp_min),
      tempMax: Math.floor(data.main.temp_max),
      pressure: `${Math.floor(data.main.pressure)}mBar`,
      humidity: `${Math.floor(data.main.humidity)}%`
    };
    this.visibility = data.visibility;
    this.wind = {
      speed: `${data.wind.speed}m/s`,
      deg: data.wind.deg
    };
    this.clouds = {
      all: data.clouds.all
    };
    this.dt = new Date(data.dt * 1000).toLocaleString();
    this.sys = {
      type: data.sys.type,
      id: data.sys.id,
      message: data.sys.message,
      country: data.sys.country,
      sunrise: formatTime(new Date(data.sys.sunrise * 1000)),
      sunset: formatTime(new Date(data.sys.sunset * 1000))
    };
    this.timezone = data.timezone;
    this.id = data.id;
    this.name = data.name;
    this.cod = data.cod;
  }

  static parseWeather(data) {
    return new WeatherModel(data);
  }
}

export default WeatherModel;
