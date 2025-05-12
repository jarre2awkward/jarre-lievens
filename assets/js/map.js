document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('lierMap').setView([51.1313, 4.5706], 12.5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bijdragers'
  }).addTo(map);

var circle = L.circle([51.1313, 4.5706], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

});
