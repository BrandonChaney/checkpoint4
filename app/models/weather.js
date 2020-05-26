export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.round(this.kelvin - 273.15) + "°"
    this.fahrenheit = Math.round((this.kelvin - 273.15) * (9 / 5) + 32) + "°"
  }

  get Template() {
    return `
    <div class="action" onclick="app.weatherController.changeCelsius()">
        <h4>
              ${this.city}
              ${this.fahrenheit}F
        </h4> 
    </div>
    `
  }
  get TemplateCelsius() {
    return `
    <div class="action" onclick="app.weatherController.changeFahrenheit()">
        <h4>
              ${this.city}
              ${this.celsius}C
        </h4> 
    </div>
    `
  }
}