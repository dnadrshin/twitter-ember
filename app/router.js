import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.route('about');
  this.route('settings');
  this.route('twitter');
});

export default Router;
