const assert = require('assert');
const app = require('../../src/app');

describe('\'tutee\' service', () => {
  it('registered the service', () => {
    const service = app.service('tutee');

    assert.ok(service, 'Registered the service');
  });
});
