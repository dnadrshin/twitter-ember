import Ember from 'ember';

let search = localStorage.getItem('search');


export default Ember.Route.extend({
	model(){
		return $.getJSON('http://demo.suitepad.systems/1.1/search/tweets.json?q='+search).then(data => {
					console.log(data.statuses);
					return data.statuses;
				});

	}
});
