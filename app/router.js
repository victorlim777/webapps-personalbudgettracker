import EmberRouter from '@ember/routing/router';
import config from 'webapps-personalbudgettracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('transaction');
  this.route('table-summary');
});
