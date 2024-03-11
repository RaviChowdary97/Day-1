// Function to fetch countries data and populate the dropdown
function fetchCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      const select = document.getElementById("countrySelect");
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.name.common;
        option.textContent = country.name.common;
        select.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching countries:", error));
}

// Function to fetch weather data for a selected country
let apiKey = `41575f34d7cb96cd9f250e887e1f7ef3`;
function fetchWeather(country) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => console.error("Error fetching weather:", error));
}

// Function to display weather data in a Bootstrap card
function displayWeather(data) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">
                <strong>Capital:</strong> ${data.sys.country}<br>
                <strong>Latitude/Longitude:</strong> ${data.coord.lat}, ${data.coord.lon}<br>
                <strong>Region:</strong> ${data.sys.country}<br>
                <strong>Country Codes:</strong> ${data.sys.country}<br>
                <img src="https://openweathermap.org/images/flags/${data.sys.country}.png" alt="Flag" width="50">
            </p>
        </div>
    `;
  document.getElementById("weatherCard").innerHTML = "";
  document.getElementById("weatherCard").appendChild(card);
}

// Event listener for the country selection dropdown
document
  .getElementById("countrySelect")
  .addEventListener("change", function () {
    fetchWeather(this.value);
  });

// Fetch countries data on page load
fetchCountries();
