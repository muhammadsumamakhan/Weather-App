let weatherData = document.querySelector("#weatherData");
let key = '6e863098e7d2404fa15113108241209';

function weather() {
    let inputData = document.querySelector("#input").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputData}&aqi=no`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            weatherData.innerHTML = `
                <img width="130px" src="${res.current.condition.icon}" alt="Weather Icon">
                <p class="temp">${res.current.temp_c}°C</p>
                <h1>${res.location.name}</h1>
                <p>${res.current.condition.text}</p>
                <div id="icon">
                    <p><i class="fa-solid fa-droplet"></i> Humidity: ${res.current.humidity}%</p>
                    <p><i class="fa-solid fa-wind"></i> Wind: ${res.current.wind_kph} km/h</p>
                </div>
            `;
        })
        .catch(error => console.log(error));
}
