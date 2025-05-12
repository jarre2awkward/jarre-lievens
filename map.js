document.addEventListener("DOMContentLoaded", function () {
  const map = L.map('lierMap').setView([51.1313, 4.5706], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bijdragers'
  }).addTo(map);

  L.marker([51.1313, 4.5706]).addTo(map)
    .bindPopup('Lier')
    .openPopup();
});
