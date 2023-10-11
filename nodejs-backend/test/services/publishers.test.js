const assert = require('assert');
const app = require('../../src/app');

describe('\'publishers\' service', () => {
  it('registered the service', () => {
    const service = app.service('publishers');

    assert.ok(service, 'Registered the service (publishers)');
  });
});
