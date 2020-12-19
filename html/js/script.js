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

    const nextTable = $('.next-table');

    for (let i = 1; i < data.properties.periods.length; i++) {

        const period = data.properties.periods[i];

        const nextRow = document.createElement('tr');
        nextRow.id = `next-${i}`;
        nextRow.classList.add('next');

        buildRow(nextRow, period)

        nextTable.appendChild(nextRow);
    }
});

const populateNow = (period) => {
    $('.right-now .name').textContent = period.name;
    $('.right-now .temperature').textContent = period.temperature + '°';
    $('.right-now .shortForecast').textContent = period.shortForecast;
    $('.right-now .shortForecast').title = period.detailedForecast;
    $('.right-now .icon').src = period.icon;

    const shortForecastLowerCase = period.shortForecast.toLowerCase();

    for (const backgroundName in weatherBackgrounds) {
        if (weatherBackgrounds[backgroundName].some(weather => shortForecastLowerCase.includes(weather))) {
            $('#weather-background').classList.add(backgroundName);
            break;
        }
    }
}

const buildRow = (nextRow, period) => {

    const name = document.createElement('td');
    const temperature = document.createElement('td');
    const shortForecast = document.createElement('td');
    const img = document.createElement('span');

    name.classList.add('name');
    temperature.classList.add('temperature');
    shortForecast.classList.add('shortForecast');
    img.classList.add('icon');

    name.innerHTML = `${period.name}`;
    temperature.innerHTML = `${period.temperature}°`;
    shortForecast.innerHTML = `${period.shortForecast}`;
    shortForecast.title = period.detailedForecast;
    img.src = period.icon;

    nextRow.appendChild(name);
    nextRow.appendChild(shortForecast);
    nextRow.appendChild(img);
    nextRow.appendChild(temperature);

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
