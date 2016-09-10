import Ember from 'ember';

export default Ember.Component.extend({
	isNameShow: true,
	actions:{
		showName() {
			this.set('isNameShow', false)
		}	
	},
});
