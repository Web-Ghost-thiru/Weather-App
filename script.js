const apiKey = "0db4d1ff0239a7c37ccc76e4655fe82e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        document.querySelector(".type   ").innerHTML = data.weather[0].main;
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
        document.querySelector(".type   ").innerHTML = data.weather[0].main;
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main =="Rain") {
        document.querySelector(".type   ").innerHTML = data.weather[0].main;
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".type   ").innerHTML = data.weather[0].main;
        weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Haze") {
        document.querySelector(".type   ").innerHTML = data.weather[0].main;
    weatherIcon.src = "drizzle.png";
}
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
