const assert = require('assert');
const app = require('../../src/app');

describe('\'tutor\' service', () => {
  it('registered the service', () => {
    const service = app.service('tutor');

    assert.ok(service, 'Registered the service');
  });
});
