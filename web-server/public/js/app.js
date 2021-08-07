console.log('Client side JavaScript file is loaded!');

fetch('http://localhost:3000/weather?address=curitiba')
  .then((response) => response.json())
  .then((data) => {
    if (data.error) return console.error(`Error: ${data.error}`);
    console.log(`Location: ${data.location}`);
    console.log(`Forecast: ${data.forecast}`);
  });
