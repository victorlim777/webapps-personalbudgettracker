import { module, test } from 'qunit';
import { setupRenderingTest } from 'webapps-personalbudgettracker/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | transaction', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Transaction />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Transaction>
        template block text
      </Transaction>
    `);

    assert.dom().hasText('template block text');
  });
});
