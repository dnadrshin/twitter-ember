import Ember from 'ember';





export default Ember.Route.extend({
	model(){
		let url = "";
		let q = 'http://demo.suitepad.systems/1.1/search/tweets.json?q=';

		let search = localStorage.getItem('search');
		let geoLat = localStorage.getItem('geoLat');
		let geoLong = localStorage.getItem('geoLong');
		let geoR = localStorage.getItem('geoR');
		let geo = geoLat+','+geoLong+',' + geoR;
		let lang = localStorage.getItem('lang');

		url += q;
		url += search;
		if(geo!="")url+='&geocode='+geo;
		if(lang!="")url+='&lang='+lang
		//console.log(this.store.findAll("twitt"));
		return $.getJSON(url).then(data => {
					console.log(data.statuses);
					return data.statuses;
				});

	}
});
