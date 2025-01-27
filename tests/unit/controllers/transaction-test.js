import { module, test } from 'qunit';
import { setupTest } from 'webapps-personalbudgettracker/tests/helpers';

module('Unit | Controller | transaction', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:transaction');
    assert.ok(controller);
  });
});
