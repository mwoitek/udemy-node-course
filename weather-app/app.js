const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

geocode("Sao Paulo", (error, data) => {
    console.log(`Error: ${error}`);
    console.log("Data:", data);
});

forecast(-25.5, -49.29, (error, data) => {
    console.log(`Error: ${error}`);
    console.log("Data:", data);
});
