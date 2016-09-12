import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://demo.suitepad.systems/',
	namespace: '1.1/search/tweets.json?q='
});
