const fs = require('fs');

const getAPIAccessKey = (fileName) => fs.readFileSync(fileName).toString().trim();

const mapboxKey = getAPIAccessKey('./utils/mapbox');
const weatherstackKey = getAPIAccessKey('./utils/weatherstack');

module.exports = {
  mapbox: mapboxKey,
  weatherstack: weatherstackKey,
};
