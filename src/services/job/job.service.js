// Initializes the `job` service on path `/job`
const createService = require('feathers-sequelize');
const createModel = require('../../models/job.model');
const hooks = require('./job.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/job', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('job');

  service.hooks(hooks);
};
