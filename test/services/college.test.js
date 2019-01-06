const assert = require('assert');
const app = require('../../src/app');

describe('\'college\' service', () => {
  it('registered the service', () => {
    const service = app.service('college');

    assert.ok(service, 'Registered the service');
  });
});
