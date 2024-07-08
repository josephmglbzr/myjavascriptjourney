const apiKey = "4772494a51357391911d3932dd7b34c7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchBtn = document.querySelector(".search button")
let searchBox = document.querySelector(".search input")
let weatherIcon = document.querySelector(".weather img");

async function weatherApp(city){

    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        
    }else{
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy.svg";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.svg";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.svg";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.svg";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.svg";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.svg";
        }
    }
     
       
    
    document.querySelector(".city").innerHTML = data.name;

    temp.innerHTML = Math.round(data.main.temp) + "°C"
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = data.wind.speed + " km/h";


    console.log(data);

}
searchBtn.addEventListener("click", () => {
    weatherApp(searchBox.value);

})