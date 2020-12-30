import { $, $$ } from './selectors.js';
import * as eventHandlers from './eventHandlers.js';

const handleError = (err) => {
    $('.modal-content .name-modal').textContent = 'Error :(';
    $('.modal-content .temperature-modal').textContent = '';
    $('.modal-content .shortForecast-modal').textContent = err;
    $('.modal-content .detailedForecast-modal').textContent = 'Please try again later';
    $('.modal-content .icon-modal img').src = '';

    eventHandlers.showModal();
}

export { handleError };
