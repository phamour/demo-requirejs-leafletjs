define(['jquery', 'leaflet'], function() {
    var map = L.map('map').setView([48.296, 4.0775], 15);

    L.tileLayer('/tiles/{z}/{x}/{y}.png', {
        minZoom: 15,
        maxZoom: 18,
        attribution: 'Optimal Deviation System | &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
});
