import { module, test } from 'qunit';
import { setupTest } from 'webapps-personalbudgettracker/tests/helpers';

module('Unit | Route | transaction', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:transaction');
    assert.ok(route);
  });
});
