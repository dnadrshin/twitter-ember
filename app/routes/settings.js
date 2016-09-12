import Ember from 'ember';

let search = localStorage.getItem('search');
let geoLat = localStorage.getItem('geoLat');
let geoLong = localStorage.getItem('geoLong');
let geoR = localStorage.getItem('geoR');
let geo = geoLat+','+geoLong+',' + geoR;
let lang = localStorage.getItem('lang');

let settings = {
	search,
	geoLat,
	geoLong,
	geoR,
	lang
}

export default Ember.Route.extend({
	model(){
		return settings
	}
});
