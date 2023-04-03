import Countdown from './modules/countdown.js';

const timeLeftToChristmas = new Countdown('24 December 2023 23:59:59 GMT-0300');
const timeLeftToNewYear = new Countdown('31 December 2023 23:59:59 GMT-0300');

setInterval(() => {
    document.getElementById('countdown').innerHTML =
        timeLeftToChristmas.total.days +
        'd ' +
        timeLeftToChristmas.total.hours +
        'h ' +
        timeLeftToChristmas.total.minutes +
        'm ' +
        timeLeftToChristmas.total.seconds +
        's ';
    document.getElementById('countdown2').innerHTML =
        timeLeftToNewYear.total.days +
        'd ' +
        timeLeftToNewYear.total.hours +
        'h ' +
        timeLeftToNewYear.total.minutes +
        'm ' +
        timeLeftToNewYear.total.seconds +
        's ';
}, 1000);
