const request = require("postman-request");
const keys = require("./keys");

const geocode = (location, callback) => {
    const url =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(location) +
        ".json?access_token=" +
        keys.mapbox +
        "&limit=1";
    request({ url, json: true }, (error, { body: responseBody } = {}) => {
        if (error) {
            callback("Unable to connect to the geocoding service!", undefined);
        } else if (responseBody.features.length === 0) {
            callback("Unable to find location! Try another search.", undefined);
        } else {
            callback(undefined, {
                latitude: responseBody.features[0].center[1],
                longitude: responseBody.features[0].center[0],
                mapboxLocation: responseBody.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;
