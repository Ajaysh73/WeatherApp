class Weather {
  constructor(zipcode) {
    this.apiKey = "e62d32a364a7d5cc1730da618874847c";
    this.zipcode = zipcode;
  }
  async getWeather() {
    console.log('in GetWeather', this.zipcode);
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${
        this.zipcode
      },us&units=imperial&APPID=e62d32a364a7d5cc1730da618874847c`
    );
    const responseData = await response.json();
    //const responseDataObj = JSON.parse(responseData);
    //console.log(responseData);
    return {
      name: responseData.name,
      ...responseData.main,
      iconUrl: `http://openweathermap.org/img/w/${
        responseData.weather[0].icon
      }.png`,
      description: responseData.weather[0].description,
      wind: responseData.wind.speed
    };
  }

  changeLocation(zipcode){
    this.zipcode = zipcode;
    console.log('in change location', zipcode);
  }
}
