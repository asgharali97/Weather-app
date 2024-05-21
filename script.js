const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const feels = document.querySelector(".feels");
const humadity = document.querySelector(".humadity");
const cloud_pct = document.querySelector('.cloud_pct')
const max_temp = document.querySelector('.max_temp')
const min_temp = document.querySelector('.min_temp')
const sunrise = document.querySelector('.sunrise')
const sunset = document.querySelector('.sunset')
const wind_degrees = document.querySelector('.wind_degrees')
const wind_speed = document.querySelector('.wind_speed')
const icon = document.querySelector(".icon");
const input = document.querySelector(".value");
const Message = document.querySelector(".Message");

// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a668599c1cmsh1d3a655a98125cbp1cecbfjsn468571fa6653",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
async function getWeather(city) {
  cityName.innerHTML = city;
  try {
    const response = await fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    );
    if(!response.ok){
      throw new error("Some error ouccar")
    }
    const result = await response.json();
   if(result.error){
    throw new error("Some error occared")
   }
      temp.innerHTML = result.temp + "°C";
      humadity.innerHTML = result.humidity + "%";
      feels.innerHTML = result.feels_like;
      cloud_pct.innerHTML = result.cloud_pct;
      max_temp.innerHTML = result.max_temp;
      min_temp.innerHTML = result.min_temp;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
      wind_degrees.innerHTML = result.wind_degrees;
      wind_speed.innerHTML = result.wind_speed;


    // displaying weather detail

  } catch (error1) {
    Message.innerHTML = "Sorry Please enter correct city name";
    clearWeather()
    setTimeout(() => {
      Message.innerHTML = '';
    }, 2000);
  }

}
getWeather("Karachi");

// Weather Clearing Function
function clearWeather (){
  temp.innerHTML = "";
  humadity.innerHTML = "";
  feels.innerHTML = "";
  cloud_pct.innerHTML = '';
  max_temp.innerHTML ='';
  min_temp.innerHTML = '';
  sunrise.innerHTML = '';
  sunset.innerHTML ='';
  wind_degrees.innerHTML = '';
  wind_speed.innerHTML =  '';
}

// hovering on icon to display search Bar

icon.addEventListener("mouseover", function () {
  setTimeout(function () {
    input.style.display = "block";
  }, 300);
});

// Search functionality
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const city = input.value.trim();
    if(city){
      getWeather(city);
    }
    clearWeather();
    input.value = "";
    input.style.display = "none";
  }
});

