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
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity
    };
    this.visibility = data.visibility;
    this.wind = {
      speed: data.wind.speed,
      deg: data.wind.deg
    };
    this.clouds = {
      all: data.clouds.all
    };
    this.dt = data.dt;
    this.sys = {
      type: data.sys.type,
      id: data.sys.id,
      message: data.sys.message,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset
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
