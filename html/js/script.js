import * as mocks from './mocks.js';

const CALL_API = false;

const $ = (selector) => {
    return document.querySelector(selector);
}

const $$ = (selector) => {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
}

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

getWeather().then((data) => {
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
