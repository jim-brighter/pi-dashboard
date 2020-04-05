import { $, $$ } from './selectors.js'

const weatherDetails = (parentNode) => {

    const weatherData = {};

    weatherData.name = parentNode.querySelector('.name').textContent;
    weatherData.temperature = parentNode.querySelector('.temperature').textContent;
    weatherData.shortForecast = parentNode.querySelector('.shortForecast').textContent;
    weatherData.detailedForecast = parentNode.querySelector('.shortForecast').title;

    $('.modal-content .name-modal').textContent = weatherData.name;
    $('.modal-content .temperature-modal').textContent = weatherData.temperature;
    $('.modal-content .shortForecast-modal').textContent = weatherData.shortForecast;
    $('.modal-content .detailedForecast-modal').textContent = weatherData.detailedForecast;

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

export { weatherDetails, closeModal };
