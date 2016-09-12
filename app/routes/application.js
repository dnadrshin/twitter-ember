import Ember from 'ember';

let dataT = 12345;

export default Ember.Route.extend({
	model(){
		return dataT;
	}
});
