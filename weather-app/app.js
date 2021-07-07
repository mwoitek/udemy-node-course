const fs = require("fs");
const request = require("postman-request");

const getAPIAccessKey = () => fs.readFileSync("weatherstack").toString().trim();
const latitude = "-25.50";
const longitude = "-49.29";
const url = `http://api.weatherstack.com/current?access_key=${getAPIAccessKey()}&query=${latitude},${longitude}`;

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});
