import * as eventHandlers from './modules/eventHandlers.js';
import { $, $$ } from './modules/selectors.js';
import * as weatherService from './modules/weatherService.js';
import * as constants from './modules/constants.js';

$('.temp-button').textContent = constants.CELSIUS;

const weatherBackgrounds = {
    snow_background: ['snow', 'flurry', 'flurries', 'sleet'],
    thunderstorm_background: ['thunderstorm'],
    rain_background: ['rain', 'showers', 'drizzle'],
    cloudy_background: ['cloudy', 'clouds'],
    sunny_background: ['sunny', 'sun', 'clear'],
};

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
    $('.right-now .icon img').src = period.icon;

    const shortForecastLowerCase = period.shortForecast.toLowerCase();

    for (const backgroundName in weatherBackgrounds) {
        if (weatherBackgrounds[backgroundName].some(weather => shortForecastLowerCase.includes(weather))) {
            $('#weather-background').classList.add(backgroundName);
            break;
        }
    }
}

const populateNext = (element, period) => {
    const elemId = element.id;
    $(`#${elemId} .name`).textContent = period.name;
    $(`#${elemId} .temperature`).textContent = period.temperature + '°';
    $(`#${elemId} .shortForecast`).textContent = period.shortForecast;
    $(`#${elemId} .shortForecast`).title = period.detailedForecast;
    $(`#${elemId} .icon img`).src = period.icon;
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.next') || event.target.closest('.right-now')) {
        eventHandlers.weatherDetails(event.target.parentNode);
    }
    else if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
        eventHandlers.closeModal();
    }
    else if (event.target.matches('.temp-button')) {
        eventHandlers.convertTemperature();
    }
}, false);
