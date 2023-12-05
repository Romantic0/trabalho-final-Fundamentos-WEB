//definiremos sua visualização para as coordenadas geográficas escolhidas e um nível de zoom:
var map = L.map('map').setView([51.505, -0.09], 13);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Faz o Circulo
var circle = L.circle([51.5, -0.11], {
    color: "red",
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

//Faz o poligono
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

//Adicionar um marcador
var marker = L.marker([51.5, -0.09]).addTo(map);

//Adiciona os Pop-ups
marker.bindPopup("<b>Fala galera!</b><br>I am Luan Gameplay.").openPopup();
circle.bindPopup("I am a bolinha.");
polygon.bindPopup("I am a objeto em formado dúvidoso.");

//Adiciona Pop-ups em camada
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a Popup Maluco!")
    .openOn(map);


//Adiciona um evento
/* 
function onMapClick(e) {
    alert("Você clicou no mapa" + e.latlng);
}

map.on('click', onMapClick); 
*/

//Evento com pop-up
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Você clicou no mapa" + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


//USANDO O GeoJSON
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};
L.geoJSON(geojsonFeature).addTo(map);

var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);