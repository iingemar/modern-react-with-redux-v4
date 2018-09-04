import axios from 'axios';

const API_KEY = 'd4d9f90dd1fe1274ac88596dbfbbe3f5';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request;', request);
    // Redux-promise middleware
    // Does this payload contain a promise?
    // No. Continue to reducer
    // YES! Stop this action. After promise resolves,
    // create a new action and send it to the reducers.

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}