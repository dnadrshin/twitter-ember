import DS from 'ember-data';

export default DS.Model.extend({
	text: DS.attr(),
	find: function(id){
		console.log(1);
		return $.getJSON('http://demo.suitepad.systems/1.1/search/tweets.json?q=' + id);
	}
});


