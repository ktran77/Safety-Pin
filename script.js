var mymap = L.map('mapid').setView([33.75, -84.40], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3RyYW43NyIsImEiOiJjaXk3anFhcjYwMDU1MzNuejM2dnRiNzhhIn0.9mUB7m-YfTTnTLfd4x-rLg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);


var dict = {
    "LARCENY-FROM VEHICLE": 'red',
    "BURGLARY-RESIDENCE" : 'blue',
    "ROBBERY-PEDESTRIAN" : 'green',
    "LARCENY-NON VEHICLE" : 'red',
    "AUTO THEFT" : 'purple',
    "AGG ASSAULT": 'orange',
    "BURGLARY-NONRES" : 'blue',

};


for( i = 0; i < data3.length; i++) {

    var circle = L.circle([data3[i].latitude, data3[i].longitude], {
        color: dict[data3[i].type],
        fillColor: dict[data3[i].type],
        fillOpacity: 0.5,
        radius: 50
        }).addTo(mymap);


}




