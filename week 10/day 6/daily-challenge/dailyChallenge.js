const apiKey = "e48bcbbb4919d048f625d66f";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching exchange rates:', error));
