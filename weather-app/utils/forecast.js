const request = require("postman-request");
const keys = require("./keys");

const unitsParameter = "units=m";

const forecast = (latitude, longitude, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=" +
        keys.weatherstack +
        "&query=" +
        latitude +
        "," +
        longitude +
        "&" +
        unitsParameter;
    request({ url, json: true }, (error, { body: responseBody } = {}) => {
        if (error) {
            callback("Unable to connect to the weather service!", undefined);
        } else if (responseBody.error) {
            callback("Unable to find location!", undefined);
        } else {
            callback(
                undefined,
                responseBody.current.weather_descriptions[0] +
                    ". It is currently " +
                    responseBody.current.temperature +
                    " degrees out. It feels like " +
                    responseBody.current.feelslike +
                    " degrees out."
            );
        }
    });
};

module.exports = forecast;
