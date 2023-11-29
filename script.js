const fetch = require('node-fetch');

async function getIPDetails(ipAddress) {
  const url = `https://ipinfo.io/${ipAddress}/json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Usage
const ipAddress = '8.8.8.8';
getIPDetails(ipAddress)
  .then(data => console.log(data))
  .catch(err => console.error(err));
