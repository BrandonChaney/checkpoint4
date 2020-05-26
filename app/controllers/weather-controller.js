import WeatherService from "../services/weather-service.js";
import store from "../store.js";

function drawWeather() {
  let weather = store.State.weather
  let template = weather.Template
  document.getElementById('weather').innerHTML = weather.Template
}

export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
  changeFahrenheit() {
    let temp = store.State.weather.Template
    document.getElementById("weather").innerHTML = temp
  }
  changeCelsius() {
    let temp = store.State.weather.TemplateCelsius
    document.getElementById("weather").innerHTML = temp
  }
}
