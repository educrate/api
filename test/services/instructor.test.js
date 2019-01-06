const assert = require('assert');
const app = require('../../src/app');

describe('\'instructor\' service', () => {
  it('registered the service', () => {
    const service = app.service('instructor');

    assert.ok(service, 'Registered the service');
  });
});
