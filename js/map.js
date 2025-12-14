"use strict"

document.addEventListener('DOMContentLoaded', function () {

  const map = L.map('map').setView([51.05, 4.38], 8);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const logoIcon = L.icon({
    iconUrl: 'assets/images/logo.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -45]
  });

  const locations = [
    {
      name: 'Ziplor AP Kantoor',
      coords: [51.2304, 4.4166]
    },
    {
      name: 'Ziplor Grote Markt Kantoor',
      coords: [50.8467, 4.3525]
    }
  ];

  locations.forEach(location => {
    L.marker(location.coords, { icon: logoIcon })
      .addTo(map)
      .bindPopup(location.name);
  });

});
