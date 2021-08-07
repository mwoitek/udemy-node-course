const fs = require('fs');

const getAPIAccessKey = (fileName) => fs.readFileSync(fileName).toString().trim();

const mapboxKey = getAPIAccessKey(`${__dirname}/mapbox`);
const weatherstackKey = getAPIAccessKey(`${__dirname}/weatherstack`);

module.exports = {
  mapbox: mapboxKey,
  weatherstack: weatherstackKey,
};
