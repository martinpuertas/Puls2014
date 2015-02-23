$(function(){
	var geo = navigator.geolocation;
	var options = {};

	function geo_error() {
		console.log("No puedo saber donde estas");
	}
	function geo_ok(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
		$('#geo').append(mapa);
		// con append podemos pasar texto o una imagen, jquery se encarga de ver que es y los mete en el html
		obtenerGeoInformacion(lat, lon);
	}
	geo.getCurrentPosition(geo_ok, geo_error, options);
});