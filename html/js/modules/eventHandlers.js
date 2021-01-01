import { $, $$ } from './selectors.js';
import { CELSIUS, FAHRENHEIT } from './constants.js';

const weatherDetails = (parentNode) => {

    $('.modal-content .name-modal').textContent = $('.name', parentNode).textContent.replace('-', '').trim();
    $('.modal-content .temperature-modal').textContent = $('.temperature', parentNode).textContent;
    $('.modal-content .shortForecast-modal').textContent = $('.shortForecast', parentNode).textContent;
    $('.modal-content .detailedForecast-modal').textContent = $('.shortForecast', parentNode).title;
    $('.modal-content .icon-modal img').src = $('.icon', parentNode).src;

    showModal();
}

const showModal = () => {
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

    if (buttonText === FAHRENHEIT) {
        const temps = $$('.temperature');
        for (const temp of temps) {
            temp.textContent = Math.round((parseInt(temp.textContent) - 32) * 5/9) + '°';
        }

        $('.temp-button').textContent = CELSIUS;
    }
    else if (buttonText === CELSIUS) {
        const temps = $$('.temperature');
        for (const temp of temps) {
            temp.textContent = Math.round((parseInt(temp.textContent) * 9/5) + 32) + '°';
        }

        $('.temp-button').textContent = FAHRENHEIT;
    }
}

export { weatherDetails, showModal, closeModal, convertTemperature };
