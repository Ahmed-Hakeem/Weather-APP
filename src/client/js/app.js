//authentication data for APIs
const APIKEY = "845f1306cd70bf5f63240a3f37034a6d";
const apiBaseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

const geoNamesURL = "http://api.geonames.org/searchJSON?q=";
const geoNamesURLPublic =
  "http://api.geonames.org/findNearbyPlaceNameJSON?lat=";

const weatherbitforecastURL =
  "https://api.weatherbit.io/v2.0/forecast/daily?&city=";
const weatherbithistoryURL =
  "https://api.weatherbit.io/v2.0/history/daily?&city=";
const weatherbitkey = "c8d642ed77854137bfd4e4df4e629026";
const pixabayURL = "https://pixabay.com/api/?key=";
const pixabaykey = "17818726-135b9c22686762a72f4d3fc35";

////////////////////////////////////////////////////////////////
//getting data from api

const fetchWeather = async function (url) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    return data;
  } catch (err) {
    console.log("Err:", err);
  }
};

////////////////////////////////////////////////////////////////
//getting data from server
const getData = async function (url) {
  let response = await fetch(url);
  try {
    let data = response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

////////////////////////////////////////////////////////////////
//postData to owr own server
async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

////////////////////////////////////////////////////////////////
//handle submitted from

const handleGenerate = async function () {
  //get  input data needed to call apis correctly

  const city = document.getElementById("city").value;
  const content = document.getElementById("feelings").value;
  const start = document.getElementById("travel-start").value;
  let endForecast = new Date(start);
  endForecast.setDate(endForecast.getDate() + 1);

  let endForecastDate =
    endForecast.getFullYear() +
    "-" +
    parseInt(endForecast.getMonth() + 1) +
    "-" +
    endForecast.getDate();

  //get trip length
  const end = document.getElementById("travel-end").value;
  let date1 = new Date(start);
  let date2 = new Date(end);

  // To calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const dataEl = document.querySelector(".catch");
  const countryImg = document.getElementById("image");
  const weatherForecast = document.getElementById("weather-forecast");
  const spin = document.getElementById("spinner");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  dataEl.classList.remove("displayData");
  countryImg.classList.remove("displayData");
  weatherForecast.classList.remove("displayData");
  leftArrow.classList.remove("displayData");
  rightArrow.classList.remove("displayData");

  //make spinner visible
  spin.className = "spin";

  //make urls needed to call APIs
  const url = `${apiBaseUrl}${encodeURIComponent(city)}&APPID=${APIKEY}`;
  const urlgeo = `${geoNamesURL}${encodeURIComponent(
    city
  )}&maxRows=10&username=ahmadhakeem`;

  const urlPixapay =
    pixabayURL + pixabaykey + "&q=" + city + " city&image_type=photo";

  const urlWeatherbitHist = `${weatherbithistoryURL}${city}&start_date=${start}&end_date=${endForecastDate}&key=${weatherbitkey}`;
  const urlweatherbitForecast = `${weatherbitforecastURL}${city}&key=${weatherbitkey}`;
  Client.checkingInput(city, content, start, end);

  // fetching data from APIs

  let weatherData = await fetchWeather(url);

  let weatherDataGeo = await fetchWeather(urlgeo);
  let weatherDataPixa = await fetchWeather(urlPixapay);
  const urlgeoPublic = `${geoNamesURLPublic}${weatherDataGeo.geonames[0].lat}&lng=${weatherDataGeo.geonames[0].lng}&username=ahmadhakeem`;
  let weatherDataGeoPublic = await fetchWeather(urlgeoPublic);

  // Getting the timestamp for the current date and traveling date to select the apprpriate endpoint.
  const tripDateTimestamp = Math.floor(new Date(start).getTime() / 1000);
  const todayDate = new Date();
  const todayTimestamp = Math.floor(
    new Date(
      todayDate.getFullYear() +
        "-" +
        parseInt(todayDate.getMonth() + 1) +
        "-" +
        todayDate.getDate()
    ).getTime() / 1000
  );

  let low_temp = [];
  let high_temp = [];
  let tempW = [];
  let description = [];
  let iconW = [];
  let dateW = [];

  // Check if the date is gone and call the appropriate endpoint.

  if (tripDateTimestamp < todayTimestamp) {
    var weatherDataWbit = await fetchWeather(urlWeatherbitHist);
    dateW[0] = weatherDataWbit.data[0].datetime;
    low_temp[0] = weatherDataWbit.data[0].min_temp;
    high_temp[0] = weatherDataWbit.data[0].max_temp;
    tempW[0] = weatherDataWbit.data[0].temp;
  } else {
    var weatherDataWbit = await fetchWeather(urlweatherbitForecast);

    for (let i = 0; i < 6; i++) {
      dateW[i] = weatherDataWbit.data[i + 1].datetime;
      low_temp[i] = weatherDataWbit.data[i + 1].low_temp;
      high_temp[i] = weatherDataWbit.data[i + 1].high_temp;
      tempW[i] = weatherDataWbit.data[i + 1].temp;
      description[i] = weatherDataWbit.data[i + 1].weather.description;
      iconW[i] = weatherDataWbit.data[i + 1].weather.icon;
    }
  }

  //consuming APIs
  // using data we got from apis
  let temp = Math.floor(weatherData.main.temp - 273);
  let windSpeed = weatherData.wind.speed;
  let cityName = weatherData.name;
  let weatherDescreption = weatherData.weather[0].description;
  let weatherIcon = weatherData.weather[0].icon;

  let picture =
    weatherDataPixa.hits[
      Math.floor(Math.random() * (weatherDataPixa.hits.length - 1) + 1)
    ].largeImageURL;

  let {
    countryName,
    toponymName,
    population,
    distance,
  } = weatherDataGeoPublic.geonames[0];

  // Create a new date instance dynamically with JS
  let dateObject = new Date();
  let date = `${dateObject.getDate()}.${
    dateObject.getMonth() + 1
  }.${dateObject.getFullYear()}`;

  const data = {
    date: date,
    temp: temp,
    content: content,
    windSpeed: windSpeed,
    cityName: cityName,
    weatherDescreption: weatherDescreption,
    weatherIcon: weatherIcon,
    picture: picture,
    countryName: countryName,
    toponymName: toponymName,
    population: population,
    distance: distance,
    low_temp: low_temp,
    high_temp: high_temp,
    tempW: tempW,
    description: description,
    iconW: iconW,
    dateW: dateW,
    Difference_In_Days: Difference_In_Days,
  };

  //Post data to owr own server
  await postData("http://localhost:8000/projectData", data);

  //Update UI

  Client.updateUI();
};

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", handleGenerate);

const changePhoto = async function () {
  const city = document.getElementById("city").value;

  const urlPixapay =
    pixabayURL + pixabaykey + "&q=" + city + " city&image_type=photo";
  let weatherDataPixa = await fetchWeather(urlPixapay);

  let picture =
    weatherDataPixa.hits[
      Math.floor(Math.random() * (weatherDataPixa.hits.length - 1) + 1)
    ].largeImageURL;

  let photoData = {
    picture: picture,
  };
  const photoo = await postData("http://localhost:8000/photo", photoData);
  Client.updateUI();
};
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");

rightArrow.addEventListener("click", changePhoto);
leftArrow.addEventListener("click", changePhoto);

export { getData };
