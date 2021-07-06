///////////////////////////////////////////////////////////////
//update user interface
const updateUI = async function () {
  const dateDiv = document.getElementById("date");
  const tempDiv = document.getElementById("temp");
  const contentDiv = document.getElementById("content");
  const weatherImage = document.getElementById("apiIcon");
  const weatherDescDiv = document.getElementById("description");
  const weatherLocDiv = document.getElementById("location");
  const population = document.getElementById("population");

  const dataEl = document.querySelector(".catch");
  const countryImg = document.getElementById("image");
  const countryPicture = document.getElementById("countryImg");
  const weatherForecast = document.getElementById("weather-forecast");
  const tripDuration = document.getElementById("flight");
  const spin = document.getElementById("spinner");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  ////////////////////////////////////////////////////////////////
  //Get data from owr own server
  let UI_Data = await Client.getData("http://localhost:8000/projectData");

  ////////////////////////////////////////////////////////////////
  //Updating the UI with server data

  //check dates input then update ui
  function validateDate(difference) {
    if (difference == null) {
      tripDuration.textContent = `please input 2 dates`;
    } else {
      tripDuration.textContent = `duration : ${difference} days`;
    }
  }
  validateDate(UI_Data.Difference_In_Days);

  dateDiv.textContent = UI_Data.date;
  tempDiv.textContent = UI_Data.temp;
  contentDiv.textContent = UI_Data.content;
  population.textContent = `${UI_Data.population} person`;
  weatherImage.src = `http://openweathermap.org/img/wn/${UI_Data.weatherIcon}@2x.png`;
  weatherDescDiv.textContent = UI_Data.weatherDescreption;
  weatherLocDiv.textContent = `${UI_Data.toponymName} , ${UI_Data.countryName}`;
  countryPicture.src = UI_Data.picture;

  ////////////////////////////////////////////////////////////////
  // check if the departing date is in the past or other with a smart way
  function smartStartDateCheck() {
    if (UI_Data.iconW.length > 1) {
      for (let i = 0; i < 6; i++) {
        let imageInstance = document.getElementById("image" + i);
        let description = document.getElementById("description" + i);
        let temprature = document.getElementById("temprature" + i);
        let minTemprature = document.getElementById("min-temp" + i);
        let maxTemprature = document.getElementById("max-temp" + i);
        let date = document.getElementById("date" + i);
        let dayWeatherInstance = document.getElementById("day-weather" + i);

        imageInstance.style.display = "block";
        imageInstance.src = `https://www.weatherbit.io/static/img/icons/${UI_Data.iconW[i]}.png`;
        dayWeatherInstance.style.display = "block";
        description.textContent = UI_Data.description[i];
        temprature.firstChild.textContent = UI_Data.tempW[i];
        minTemprature.textContent = UI_Data.low_temp[i];
        maxTemprature.textContent = UI_Data.high_temp[i];
        date.textContent = UI_Data.dateW[i];

        console.log(temprature.childNodes);
      }
    } else {
      let temprature = document.getElementById("temprature" + 0);
      let minTemprature = document.getElementById("min-temp" + 0);
      let maxTemprature = document.getElementById("max-temp" + 0);
      let date = document.getElementById("date" + 0);
      temprature.firstChild.textContent = UI_Data.tempW[0];
      minTemprature.textContent = UI_Data.low_temp[0];
      maxTemprature.textContent = UI_Data.high_temp[0];
      date.textContent = UI_Data.dateW[0];

      for (i = 1; i < 6; i++) {
        let imageInstance = document.getElementById("image" + i);
        let dayWeatherInstance = document.getElementById("day-weather" + i);
        imageInstance.style.display = "none";
        dayWeatherInstance.style.display = "none";
      }
    }
  }
  smartStartDateCheck();

  function viewWithData() {
    // hide spin after data container is ready to view
    spin.className = "spinHide";

    //make data container visible
    dataEl.classList.add("displayData");
    countryImg.classList.add("displayData");
    weatherForecast.classList.add("displayData");
    leftArrow.classList.add("displayData");
    rightArrow.classList.add("displayData");
  }
  viewWithData();
};

export { updateUI };
