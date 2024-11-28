import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
    const { name, sys, main, weather, wind } = weatherData;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="weather-display">
            <h2>{name}, {sys.country}</h2>
            <img src={weatherIcon} alt={weather[0].description} />
            <p>{weather[0].description}</p>
            <h3>{main.temp}°C</h3>
            <p>Feels like: {main.feels_like}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind: {wind.speed} m/s</p>
        </div>
    );
};

export default WeatherDisplay; 