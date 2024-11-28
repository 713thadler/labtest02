import axios from 'axios';

const API_KEY = '3f4abb1379c8d0b71d25cd47649f90dd';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCity = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw error;
    }
};