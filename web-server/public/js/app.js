console.log('Client side JavaScript file is loaded!');

const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');
const search = document.querySelector('input');
const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  message1.textContent = 'Loading...';
  message2.textContent = '';

  const address = search.value;
  fetch(`http://localhost:3000/weather?address=${address}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        message1.textContent = `Error: ${data.error}`;
      } else {
        message1.textContent = `Location: ${data.location}`;
        message2.textContent = `Forecast: ${data.forecast}`;
      }
    });
});
