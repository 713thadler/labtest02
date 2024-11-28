import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeatherByCity } from './api/WeatherService'; 

const App = () => {
    const [city, setCity] = useState('Toronto');
    const [weather, setWeather] = useState(null);

    const handleSearch = async (cityName) => {
        try {
            const data = await fetchWeatherByCity(cityName);
            setCity(cityName);
            setWeather(data);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };

    return (
        <div className="app">
            <h1>Weather in Your City</h1>
            <SearchBar onSearch={handleSearch} />
            {weather && <WeatherDisplay weatherData={weather} />}
        </div>
    );
};

export default App;
