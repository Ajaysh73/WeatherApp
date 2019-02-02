class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.des = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.minmaxTemp = document.getElementById("w-minmaxTemp");
    this.wind = document.getElementById("w-wind");
  }
  paint(weather) {
    console.log(weather);
    this.location.textContent = weather.name;
    this.des.textContent = weather.description;
    this.string.textContent = weather.temp;
    this.icon.setAttribute("src", weather.iconUrl);
    this.humidity.textContent = `Relative Humindity: ${weather.humidity}`;
    this.minmaxTemp.textContent = `Temp Max: ${weather.temp_max} Temp Min: ${
      weather.temp_min
    }`;
    this.pressure.textContent = `Pressure: ${weather.pressure}`;
    this.wind.textContent = `Wind: ${weather.wind}`;
  }
}
