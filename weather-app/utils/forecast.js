const request = require("postman-request");
const keys = require("./keys");

const unitsParameter = "units=m";

const forecast = (latitude, longitude, callback) => {
    const weatherstackUrl =
        "http://api.weatherstack.com/current?access_key=" +
        keys.weatherstack +
        "&query=" +
        latitude +
        "," +
        longitude +
        "&" +
        unitsParameter;
    request({ url: weatherstackUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to the weather service!", undefined);
        } else if (response.body.error) {
            callback("Unable to find location!", undefined);
        } else {
            callback(
                undefined,
                response.body.current.weather_descriptions[0] +
                    ". It is currently " +
                    response.body.current.temperature +
                    " degrees out. It feels like " +
                    response.body.current.feelslike +
                    " degrees out."
            );
        }
    });
};

module.exports = forecast;
