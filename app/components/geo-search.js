import Ember from 'ember';

export default Ember.Component.extend({
	address: 'Kaliningrad',
	lat:'',
	lng:'',
	actions:{
		getGeo(){
			let emb = this;
			let api_key = 'AIzaSyAtoMIGinK3N5MxoDv6c_jj-dGWAnYOAOU';
			let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.address+'&key='+api_key;
			return $.getJSON(url, function(data){
				emb.set('lat',data.results[0].geometry.location.lat);
				emb.set('lng',data.results[0].geometry.location.lng);				
			});
		}
	}
});
