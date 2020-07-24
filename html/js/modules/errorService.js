import { $, $$ } from './selectors.js';
import * as eventHandlers from './eventHandlers.js';

const handleError = (err) => {
    $('.modal-content .name-modal').textContent = 'Error :(';
    $('.modal-content .temperature-modal').textContent = '';
    $('.modal-content .shortForecast-modal').textContent = 'There was an error getting weather info from weather.gov';
    $('.modal-content .detailedForecast-modal').textContent = 'Please try again later';
    $('.modal-content .icon-modal img').src = '';

    console.error(err);

    eventHandlers.showModal();
}

export { handleError };
