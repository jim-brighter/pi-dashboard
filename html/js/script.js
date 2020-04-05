import * as eventHandlers from './modules/eventHandlers.js';
import { $, $$ } from './modules/selectors.js';
import * as weatherService from './modules/weatherService.js';

weatherService.getWeather().then((data) => {
    populateNow(data.properties.periods[0]);

    const nextElements = $$('.next');
    for (const element of nextElements) {
        if (!element.id) {
            continue;
        }
        populateNext(element, data.properties.periods[element.id.substring(element.id.length - 1)]);
    }
});

const populateNow = (period) => {
    $('.right-now .name').textContent = period.name;
    $('.right-now .temperature').textContent = period.temperature + '°';
    $('.right-now .shortForecast').textContent = period.shortForecast;
    $('.right-now .shortForecast').title = period.detailedForecast;

    if(period.shortForecast.toLowerCase().includes('rain')) {
        $('#weather-background').classList.add('rain-background');
    }
    else if (period.shortForecast.toLowerCase().includes('cloudy')) {
        $('#weather-background').classList.add('cloudy-background');
    }
    else if (period.shortForecast.toLowerCase().includes('sunny')) {
        $('#weather-background').classList.add('sunny-background');
    }
}

const populateNext = (element, period) => {
    const elemId = element.id;
    $(`#${elemId} .name`).textContent = period.name;
    $(`#${elemId} .temperature`).textContent = period.temperature + '°';
    $(`#${elemId} .shortForecast`).textContent = period.shortForecast;
    $(`#${elemId} .shortForecast`).title = period.detailedForecast;
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.next') || event.target.closest('.right-now')) {
        eventHandlers.weatherDetails(event.target.parentNode);
    }
    else if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
        eventHandlers.closeModal();
    }
}, false);
