const fs = require("fs");
const request = require("postman-request");

const getAPIAccessKey = (fileName) =>
    fs.readFileSync(fileName).toString().trim();

const weatherstackKey = getAPIAccessKey("weatherstack");
const latitude = "-25.50";
const longitude = "-49.29";
const unitsParameter = "units=f";
const weatherstackUrl =
    "http://api.weatherstack.com/current?access_key=" +
    weatherstackKey +
    "&query=" +
    latitude +
    "," +
    longitude +
    "&" +
    unitsParameter;

request({ url: weatherstackUrl, json: true }, (error, response) => {
    console.log(
        response.body.current.weather_descriptions[0] +
            ". It is currently " +
            response.body.current.temperature +
            " degrees out. It feels like " +
            response.body.current.feelslike +
            " degrees out."
    );
});

const mapboxKey = getAPIAccessKey("mapbox");
const mapboxUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" +
    mapboxKey +
    "&limit=1";

request({ url: mapboxUrl, json: true }, (error, response) => {
    console.log(`Latitude: ${response.body.features[0].center[1]}`);
    console.log(`Longitude: ${response.body.features[0].center[0]}`);
});
