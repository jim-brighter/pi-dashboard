import * as mocks from './mocks.js';
import { CALL_API } from './constants.js';

const getWeather = async () => {

    let data;

    if (CALL_API) {
        console.log('Calling weather.gov API');
        let response = await fetch('https://api.weather.gov/gridpoints/LWX/92,77/forecast', {
            headers: {
                'Accept': 'application/geo+json',
                'User-Agent': '(jim-raspi-dashboard, jbrighter92@gmail.com)'
            }
        });
        data = await response.json();
    } else {
        console.log('Using Mock Response');
        data = mocks.sunnyResponse;
    }
    return data;
}

export { getWeather };
