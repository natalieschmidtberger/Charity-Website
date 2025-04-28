const cityInput = document.getElementById("cityInput");
const stateInput = document.getElementById("stateInput");
const searchButton = document.getElementById("searchButton");
const weatherButton = document.getElementById("weatherButton");
const weatherContainer = document.getElementById("weatherContainer");

const apiKey = "d79f7cff5f175280f25e02bedfffaf11"; 
async function fetchWeather(city, state) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === "404") {
            weatherContainer.innerHTML = `<p class="error-message">City not found. Please try again.</p>`;
        } else {
            const { name, main, weather } = data;
            const weatherDescription = weather[0].description;
            const temperature = main.temp;
            const humidity = main.humidity;

            weatherContainer.innerHTML = `
                <h2>Weather in ${name}</h2>
                <p><strong>Temperature:</strong> ${temperature}°F</p>
                <p><strong>Condition:</strong> ${weatherDescription}</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
            `;
        }
    } catch (error) {
        weatherContainer.innerHTML = `<p class="error-message">Sorry, there was an error fetching the weather data.</p>`;
    }
}

weatherButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    const state = stateInput.value.trim();
    if (city && state) {
        fetchWeather(city, state);
    } else {
        weatherContainer.innerHTML = "<p class='error-message'>Please enter both city and state to see the weather.</p>";
    }
});

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    const state = stateInput.value.trim();
    if (city && state) {
    } else {
        weatherContainer.innerHTML = "<p class='error-message'>Please enter both city and state.</p>";
    }
});
