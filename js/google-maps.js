// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var myLatlng = new google.maps.LatLng(55.679382, 12.555092); // Reload! A/S

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: myLatlng,

    // Disable Street-view
    streetViewControl: false,

    // Disable Map / Satellite control.
    mapTypeControl: false,

    // Disable scrollwheel, it destroys the flow of the website.
    scrollwheel: false,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
  };

  // Get the HTML DOM element that will contain your map
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Set options for custom marker.
  var marker = new google.maps.Marker({
    position: myLatlng
//    icon: 'https://launchrock-assets.s3.amazonaws.com/logo-files/M7VDI452_1394396047127.png?_=5'
  });

  // Place the marker on the map.
  marker.setMap(map);
}
