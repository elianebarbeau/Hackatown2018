document.querySelectorAll(".listeLieux div").forEach(function(current) {
  current.addEventListener("click", function() {
    openModal(current.innerHTML);
  })
});

function initMap() {
  var ville = {lat: 45.526534, lng: -73.287043};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: ville
  });
  var goldStar = {
    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.8,
    scale: 0.2,
    strokeColor: 'gold',
    strokeWeight: 14
  };
  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Parc</h1>'+
  '<div id="bodyContent">'+
  'crotte'+
  '</div>'+
  '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker1 = createMarker({lat: 45.513633, lng: -73.294692}, "Parc du Ruisseau", map);
  var marker2 = createMarker({lat: 45.515452, lng: -73.293029}, "Arena Jean Rougeau", map);
  var marker3 = createMarker({lat: 45.515126, lng:  -73.288238}, "La Chanterelle", map);
  var marker4 = createMarker({lat: 45.521869, lng: -73.285733}, "Terrain de baseball", map);
  var marker5 = createMarker({lat: 45.523184, lng: -73.283544}, "Terrain de Soccer", map);
  var marker6 = createMarker({lat: 45.530985, lng: -73.294751}, "Terrain de baseball", map);
  var marker7 = createMarker({lat: 45.532038, lng: -73.295254}, "Court de badminton", map);

}

function createMarker(pos, t, m) {
  var marker = new google.maps.Marker({
    position: pos,
    map: m,  // google.maps.Map
    title: t
  });
  google.maps.event.addListener(marker, 'click', function() {
   openModal(marker.title);
  });
  return marker;
}



function openModal(title) {
  document.getElementById("modalHeader").innerHTML = title;
  document.querySelector(".modalText").innerHTML = title + " est un merveilleux endroit pour se promener"
  $("#myModal").modal();
}
