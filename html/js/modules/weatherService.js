import * as mocks from './mocks.js';
import { CALL_API } from './constants.js';
import * as errorService from './errorService.js';

const getWeather = async () => {

    let data;

    if (CALL_API) {
        try {
            console.log('Calling weather.gov API');
            let response = await fetch('https://api.weather.gov/gridpoints/LWX/84,71/forecast', {
                headers: {
                    'Accept': 'application/geo+json',
                    'User-Agent': '(jim-raspi-dashboard, jbrighter92@gmail.com)'
                }
            });

            if (!response.ok) {
                throw `Got status ${response.status} from weather.gov`;
            }
            data = await response.json();
        } catch(err) {
            errorService.handleError(err);
        }
    } else {
        console.log('Using Mock Response');
        data = mocks.rainResponse;
    }
    return data;
}

export { getWeather };
