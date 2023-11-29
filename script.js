fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const publicIP = data.ip;
    document.getElementById('public-ip').innerText = publicIP;
  });

fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    const postalCode = data.postal;
    document.getElementById('postal-code').innerText = postalCode;
  });
