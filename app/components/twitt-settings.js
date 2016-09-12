import Ember from 'ember';

let settings = {
	search: localStorage.getItem('search')||"",
	geoLat: localStorage.getItem('geoLat')||"",
	geoLong: localStorage.getItem('geoLong')||"",
	geoR: localStorage.getItem('geoR')||"",
	lang: localStorage.getItem('lang')||""
}

function getGeo(){
	let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAtoMIGinK3N5MxoDv6c_jj-dGWAnYOAOU';
	return $.getJSON(url, function(data){
		console.log(data)
	});
}

export default Ember.Component.extend({
	settings:settings,
	actions:{
		confirm(){
			getGeo();
			localStorage.setItem('search', settings.search);
			localStorage.setItem('geoLat', settings.geoLat);
			localStorage.setItem('geoLong', settings.geoLong);
			localStorage.setItem('geoR', settings.geoR);
			localStorage.setItem('lang', settings.lang);
			//window.location.reload(true);
		}
	}
});
