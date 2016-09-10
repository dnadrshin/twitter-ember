import Ember from 'ember';

let dataT = 12345;

export default Ember.Route.extend({
	model(){
		return dataT;
	},
	save(){
			console.log('save')
		},
	actions: {
		save(){
			console.log('save')
		}
	}
});
