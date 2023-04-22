const express = require('express');
require('dotenv').config()
const WeatherController = require('./Controllers/WeatherController');

const app = express();
app.use(express.json());

const weatherController = new WeatherController();

// Routes
app.get('/weather/city/:city', weatherController.getCityWeather);
app.get('/forecast/city/:city/:days', weatherController.getCityForecast);
app.get('/weather/cities/bulk', weatherController.getBulkCitiesWeather);


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
