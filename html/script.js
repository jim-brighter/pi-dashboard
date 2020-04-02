(() => {
    const $ = (selector) => {
        return document.querySelector(selector);
    }

    const $$ = (selector) => {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
    }

    const mockResponse = JSON.parse('{"@context":["https://raw.githubusercontent.com/geojson/geojson-ld/master/contexts/geojson-base.jsonld",{"wx":"https://api.weather.gov/ontology#","geo":"http://www.opengis.net/ont/geosparql#","unit":"http://codes.wmo.int/common/unit/","@vocab":"https://api.weather.gov/ontology#"}],"type":"Feature","geometry":{"type":"GeometryCollection","geometries":[{"type":"Point","coordinates":[-77.1113742,39.0536249]},{"type":"Polygon","coordinates":[[[-77.1236246,39.0660474],[-77.1273706,39.044111900000004],[-77.0991266,39.041200800000006],[-77.0953748,39.06313600000001],[-77.1236246,39.0660474]]]}]},"properties":{"updated":"2020-04-01T01:35:52+00:00","units":"us","forecastGenerator":"BaselineForecastGenerator","generatedAt":"2020-04-01T02:41:27+00:00","updateTime":"2020-04-01T01:35:52+00:00","validTimes":"2020-03-31T19:00:00+00:00/P7DT6H","elevation":{"value":121.0056,"unitCode":"unit:m"},"periods":[{"number":1,"name":"Tonight","startTime":"2020-03-31T22:00:00-04:00","endTime":"2020-04-01T06:00:00-04:00","isDaytime":false,"temperature":40,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"10 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/night/rain,90/rain,80?size=medium","shortForecast":"Occasional Light Rain","detailedForecast":"Occasional rain before 2am, then isolated rain showers between 2am and 5am. Cloudy, with a low around 40. Northeast wind around 10 mph. Chance of precipitation is 90%. New rainfall amounts less than a tenth of an inch possible."},{"number":2,"name":"Wednesday","startTime":"2020-04-01T06:00:00-04:00","endTime":"2020-04-01T18:00:00-04:00","isDaytime":true,"temperature":55,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a high near 55. North wind around 9 mph."},{"number":3,"name":"Wednesday Night","startTime":"2020-04-01T18:00:00-04:00","endTime":"2020-04-02T06:00:00-04:00","isDaytime":false,"temperature":38,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 38. Northwest wind around 8 mph."},{"number":4,"name":"Thursday","startTime":"2020-04-02T06:00:00-04:00","endTime":"2020-04-02T18:00:00-04:00","isDaytime":true,"temperature":57,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"8 to 14 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/few?size=medium","shortForecast":"Sunny","detailedForecast":"Sunny, with a high near 57. Northwest wind 8 to 14 mph, with gusts as high as 26 mph."},{"number":5,"name":"Thursday Night","startTime":"2020-04-02T18:00:00-04:00","endTime":"2020-04-03T06:00:00-04:00","isDaytime":false,"temperature":41,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"9 to 13 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/night/few?size=medium","shortForecast":"Mostly Clear","detailedForecast":"Mostly clear, with a low around 41. Northwest wind 9 to 13 mph, with gusts as high as 22 mph."},{"number":6,"name":"Friday","startTime":"2020-04-03T06:00:00-04:00","endTime":"2020-04-03T18:00:00-04:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"12 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 60."},{"number":7,"name":"Friday Night","startTime":"2020-04-03T18:00:00-04:00","endTime":"2020-04-04T06:00:00-04:00","isDaytime":false,"temperature":43,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"2 to 9 mph","windDirection":"N","icon":"https://api.weather.gov/icons/land/night/sct?size=medium","shortForecast":"Partly Cloudy","detailedForecast":"Partly cloudy, with a low around 43."},{"number":8,"name":"Saturday","startTime":"2020-04-04T06:00:00-04:00","endTime":"2020-04-04T18:00:00-04:00","isDaytime":true,"temperature":60,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"NE","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 60."},{"number":9,"name":"Saturday Night","startTime":"2020-04-04T18:00:00-04:00","endTime":"2020-04-05T06:00:00-04:00","isDaytime":false,"temperature":44,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/bkn?size=medium","shortForecast":"Mostly Cloudy","detailedForecast":"Mostly cloudy, with a low around 44."},{"number":10,"name":"Sunday","startTime":"2020-04-05T06:00:00-04:00","endTime":"2020-04-05T18:00:00-04:00","isDaytime":true,"temperature":66,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"S","icon":"https://api.weather.gov/icons/land/day/bkn?size=medium","shortForecast":"Partly Sunny","detailedForecast":"Partly sunny, with a high near 66."},{"number":11,"name":"Sunday Night","startTime":"2020-04-05T18:00:00-04:00","endTime":"2020-04-06T06:00:00-04:00","isDaytime":false,"temperature":47,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SW","icon":"https://api.weather.gov/icons/land/night/rain_showers?size=medium","shortForecast":"Slight Chance Rain Showers","detailedForecast":"A slight chance of rain showers between 8pm and 2am. Mostly cloudy, with a low around 47."},{"number":12,"name":"Monday","startTime":"2020-04-06T06:00:00-04:00","endTime":"2020-04-06T18:00:00-04:00","isDaytime":true,"temperature":71,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"NW","icon":"https://api.weather.gov/icons/land/day/sct?size=medium","shortForecast":"Mostly Sunny","detailedForecast":"Mostly sunny, with a high near 71."},{"number":13,"name":"Monday Night","startTime":"2020-04-06T18:00:00-04:00","endTime":"2020-04-07T06:00:00-04:00","isDaytime":false,"temperature":52,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"5 mph","windDirection":"SE","icon":"https://api.weather.gov/icons/land/night/rain_showers,30?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers after 8pm. Mostly cloudy, with a low around 52. Chance of precipitation is 30%."},{"number":14,"name":"Tuesday","startTime":"2020-04-07T06:00:00-04:00","endTime":"2020-04-07T18:00:00-04:00","isDaytime":true,"temperature":70,"temperatureUnit":"F","temperatureTrend":null,"windSpeed":"3 mph","windDirection":"E","icon":"https://api.weather.gov/icons/land/day/rain_showers,50?size=medium","shortForecast":"Chance Rain Showers","detailedForecast":"A chance of rain showers. Mostly cloudy, with a high near 70. Chance of precipitation is 50%."}]}}');

    const getWeather = async (useMock=true) => {

        let data;

        if (!useMock) {
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
            data = mockResponse;
        }
        return data;
    }

    getWeather(false).then((data) => {
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
    }

    const populateNext = (element, period) => {
        const elemId = element.id;
        $(`#${elemId} .name`).textContent = period.name;
        $(`#${elemId} .temperature`).textContent = period.temperature + '°';
        $(`#${elemId} .shortForecast`).textContent = period.shortForecast;
        $(`#${elemId} .shortForecast`).title = period.detailedForecast;
    }
})();

//             {
//                 "number": 1,
//                 "name": "Tonight",
//                 "startTime": "2020-03-31T22:00:00-04:00",
//                 "endTime": "2020-04-01T06:00:00-04:00",
//                 "isDaytime": false,
//                 "temperature": 40,
//                 "temperatureUnit": "F",
//                 "temperatureTrend": null,
//                 "windSpeed": "10 mph",
//                 "windDirection": "NE",
//                 "icon": "https://api.weather.gov/icons/land/night/rain,90/rain,80?size=medium",
//                 "shortForecast": "Occasional Light Rain",
//                 "detailedForecast": "Occasional rain before 2am, then isolated rain showers between 2am and 5am. Cloudy, with a low around 40. Northea
// st wind around 10 mph. Chance of precipitation is 90%. New rainfall amounts less than a tenth of an inch possible."
//             }
