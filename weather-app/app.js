const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const location = process.argv[2];

if (location) {
    geocode(location, (error, { latitude, longitude, mapboxLocation } = {}) => {
        if (error) {
            return console.log(`Error: ${error}`);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(`Error: ${error}`);
            }
            console.log(mapboxLocation);
            console.log(forecastData);
        });
    });
} else {
    console.log("Please provide a location.");
}
