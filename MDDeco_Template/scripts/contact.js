"use strict";

function createMap(position) {
  // 45.405952,-73.9440509
  var Lat = 45.405952;
  var Lng = -73.9440509;

  var mapOptions = {
    center: new google.maps.LatLng(Lat, Lng),
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // set zoom level
  map.setZoom(15);

  // Creating a marker and positioning it on the map
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(Lat, Lng),
    map: map
  });
}

function fail() {
  document.getElementById('map').innerHTML = "Unable to access the location.";
}

window.addEventListener('load', createMap, false);