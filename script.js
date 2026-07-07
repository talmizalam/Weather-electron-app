const apiKey = "411b63ff06dc4a1b099e2580f2852651";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(".for_search");
const searchBtn = document.querySelector(".for_search_btn");
const weatherIcon = document.querySelector(".for_video");

async function checkWeather(for_place_name) {
  const response = await fetch(`${apiUrl}${for_place_name}&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".for_place_name").innerHTML = data.name;
  document.querySelector(".for_text_temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".for_text_temp_details").innerHTML = data.weather[0].description;
  
if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./images/clude with sun.webm";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./images/sun-Picsart-BackgroundRemover.webm";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.webm";
  }

  else if (data.weather[0].main == "Drizzle") { 
    weatherIcon.src = "./images/light rain.webm";
  }
  else if (data.weather[0].main == "thunderstorm") {
    weatherIcon.src = "./images/thnderiansd.webm";
  }
}
searchBox.addEventListener("click", () => {
  checkWeather(searchBox.value);
});