var map = L.map( 'map', {
    center: [43.0374,-83.6923],
    minZoom: 6,
    zoom: 9
});

L.circle([42.9374,-83.6923], 38000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.15
}).addTo( map );

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );