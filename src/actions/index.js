import axios from 'axios';

const API_KEY= '2503b57d71199965d4ff1aa7f3f0a46e';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    //request url
    const url = `${ROOT_URL}&q=${city},my`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
} 