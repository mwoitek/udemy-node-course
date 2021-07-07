const fs = require("fs");
const request = require("postman-request");

const getAPIAccessKey = () => fs.readFileSync("weatherstack").toString().trim();
const latitude = "-25.50";
const longitude = "-49.29";
const unitsParameter = "units=f";
const url = `http://api.weatherstack.com/current?access_key=${getAPIAccessKey()}&query=${latitude},${longitude}&${unitsParameter}`;

request({ url: url, json: true }, (error, response) => {
    console.log(
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
    );
});
