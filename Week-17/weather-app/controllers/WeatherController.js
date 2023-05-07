const axios = require('axios');

class WeatherController{
    async getCityWeather(req, res){
        try {
            const city = req.params.city;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY_OPENAPI}&units=metric`;
            const weatherData = await axios.get(url);
            res.status(200).json(weatherData.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching weather data' });
        }
    }

    async getCityForecast(req, res){
        try {
            const city = req.params.city;
            const days = req.params.days;

            if (days < 1 || days > 10) {
                res.status(422).json({ errors: { days : 'Foreacast days should be between 1 to 10.' }});;
                return;
            }

            const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY_WEATHERAPI}&q=${city}&days=${days}&aqi=no&alerts=no`;
            const forecastData = await axios.get(url);
            res.status(200).json(forecastData.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching foreacast data' });
        }
    }

    async getBulkCitiesWeather(req, res){
        try {
            const { cities, per_page, page } = req.query;

            const locations = cities.slice((page - 1) * per_page, page * per_page).map((city) => {
                return {
                    q: city
                }
            });
            
            const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY_WEATHERAPI}&q=bulk`;
            const weatherData = await axios.get(url, {
                data: {
                    locations: locations,
                }
            });
            res.status(200).json(weatherData.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching foreacast data' });
        }
    }
}

module.exports = WeatherController;