import Ember from 'ember';

let settings = {
	search: localStorage.getItem('search')||"Kaliningrad",
	geo: localStorage.getItem('geo')||"Berlin"
}



export default Ember.Component.extend({
	settings:settings,
	actions:{
		confirm(){
			console.log(this);
			localStorage.setItem('search', settings.search);
			localStorage.setItem('geo', settings.geo);
		}

	}
});
