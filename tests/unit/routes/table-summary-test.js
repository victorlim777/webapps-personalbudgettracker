import { module, test } from 'qunit';
import { setupTest } from 'webapps-personalbudgettracker/tests/helpers';

module('Unit | Route | table-summary', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:table-summary');
    assert.ok(route);
  });
});
