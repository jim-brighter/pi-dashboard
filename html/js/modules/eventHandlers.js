import { $, $$ } from './selectors.js';
import { CELSIUS, FAHRENHEIT } from './constants.js';

const weatherDetails = (parentNode) => {

    const weatherData = {};

    weatherData.name = $('.name', parentNode).textContent;
    weatherData.temperature = $('.temperature', parentNode).textContent;
    weatherData.shortForecast = $('.shortForecast', parentNode).textContent;
    weatherData.detailedForecast = $('.shortForecast', parentNode).title;
    weatherData.iconLink = $('.icon img', parentNode).src;

    $('.modal-content .name-modal').textContent = weatherData.name;
    $('.modal-content .temperature-modal').textContent = weatherData.temperature;
    $('.modal-content .shortForecast-modal').textContent = weatherData.shortForecast;
    $('.modal-content .detailedForecast-modal').textContent = weatherData.detailedForecast;
    $('.modal-content .icon-modal img').src = weatherData.iconLink;

    $('.modal').classList.add('show');
    $('.modal .modal-content').classList.add('show');
}

const closeModal = () => {
    $('.modal .modal-content').classList.remove('show');
    $('.modal .modal-content').addEventListener('transitionend', removeModalBackground); // wait for modal-contents to disappear before removing background
}

const removeModalBackground = (e) => {
    $('.modal').classList.remove('show');
    $('.modal .modal-content').removeEventListener('transitionend', removeModalBackground); // remove the listener as soon as background is gone
}

const convertTemperature = () => {
    const buttonText = $('.temp-button').textContent;

    if (buttonText === CELSIUS) {
        const temps = $$('.temperature');
        for (const temp of temps) {
            temp.textContent = Math.round((parseInt(temp.textContent) - 32) * 5/9) + '°';
        }

        $('.temp-button').textContent = FAHRENHEIT;
    }
    else if (buttonText === FAHRENHEIT) {
        const temps = $$('.temperature');
        for (const temp of temps) {
            temp.textContent = Math.round((parseInt(temp.textContent) * 9/5) + 32) + '°';
        }

        $('.temp-button').textContent = CELSIUS;
    }
}

export { weatherDetails, closeModal, convertTemperature };
