/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise ✅
 * TODO: Complete searchCity() to get user input and get data using getWeatherData() ✅
 * TODO: Complete showWeatherData() to set the data in the the html file from response ✅
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const clear =
  'url("https://www.freeapplewallpapers.com/wp-content/uploads/2013/11/Fields-of-Sunflowers.jpg")';
const rain =
  'url("https://i.pinimg.com/originals/7c/b1/eb/7cb1eb711d937ae9d2d2d81d9e862873.jpg")';
const mist =
  'url("https://i.pinimg.com/736x/10/bc/a7/10bca7fa32ce38f1270bd7d69419c8db.jpg")';
const clouds =
  'url("https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80")';
const fog =
  'url("https://androidwalls.net/wp-content/uploads/2014/10/Horror%20Misty%20Dark%20Forest%20Android%20Wallpaper-360x640.jpg")';
const drizzle =
  'url("https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")';
const wallpaper =
  'url("https://i.pinimg.com/originals/41/21/1d/41211d15cf56d9827c25d98ece667fc5.jpg")';

/**
 * Retrieve weather data from openweather4
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * first param after ? is the city, second is the app id which is the api_key while the third is in units.
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  //this gets user input.
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city)
    .then((response) => {
      console.log(response);
      showWeatherData(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //We are getting all these through console
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;

  const weatherType = document
    .getElementById("weather-type")
    .innerText.toLowerCase();
  console.log("Hello ", weatherType);
  console.log("tag names", document.getElementsByTagName("main"));
  const mainElement = document.getElementsByTagName("main")[0];

  if (mainElement) {
    switch (weatherType) {
      case "clear":
        mainElement.style.backgroundImage = clear;
        break;
      case "rain":
        mainElement.style.backgroundImage = rain;
        break;
      case "mist":
        mainElement.style.backgroundImage = mist;
        break;
      case "clouds":
        mainElement.style.backgroundImage = clouds;
        break;
      case "fog":
        mainElement.style.backgroundImage = fog;
        break;
      case "drizzle":
        mainElement.style.backgroundImage = drizzle;
        break;
      default:
        mainElement.style.backgroundImage = wallpaper;
    }
  }
};
