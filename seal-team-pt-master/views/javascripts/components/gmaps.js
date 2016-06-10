//AIzaSyCecvVjjeni-x-VNQbxGj4kmoaQykEIB20

export default function() {
  function initialize() {
    var sealTeamStore = new google.maps.LatLng(37.6455394, -77.5820803);
    var panoramaOptions = {
      position: sealTeamStore,
      pov: {
        heading: 82,
        pitch: 0
      },
      zoom: 1
    };
    var myPano = new google.maps.StreetViewPanorama(
      document.getElementById('map-canvas'),
       panoramaOptions);
    myPano.setVisible(true);
  }

  if($("#map-canvas").length > 0){
    google.maps.event.addDomListener(window, 'load', initialize);
  }
}

// ,