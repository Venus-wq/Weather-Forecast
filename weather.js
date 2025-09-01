document.getElementById('weatherForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const city = document.getElementById('cityInput').value.trim();
  const provider = document.getElementById('provider').value;

  if (!city) return alert("Please enter a city name.");

  let url;

  switch (provider) {
    case 'google':
      url = `https://www.google.com/search?q=weather+in+${encodeURIComponent(city)}`;
      break;
    case 'weathercom':
      url = `https://weather.com/weather/today/l/${encodeURIComponent(city)}`;
      break;
    case 'openweather':
      url = `https://openweathermap.org/find?q=${encodeURIComponent(city)}`;
      break;
    default:
      url = `https://www.google.com/search?q=weather+in+${encodeURIComponent(city)}`;
  }

  window.open(url, '_blank');
});
