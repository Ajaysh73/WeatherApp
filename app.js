// Init Storage
const storage = new Storage;

// Init Weather location
const weatherLocation = storage.getLocation();

// Init Weather object
const weather = new Weather(weatherLocation.zipcode);

// Init UI
const ui = new UI();

// Get weather at DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById("w-change-btn").addEventListener("click", function(e) {
  const zipcode = document.getElementById("zipcode").value;
  storage.setLocation(zipcode);
  weather.changeLocation(zipcode);
  console.log(zipcode);
  // Get Weather

  getWeather();
  //close modal
  $("#locModal").modal("hide");
});

function getWeather() {
weather
  .getWeather()
  .then(responseData => {
    ui.paint(responseData);
  })
  .catch(error => console.log(error));
}
