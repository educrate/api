// Initializes the `college` service on path `/college`
const createService = require('feathers-sequelize');
const createModel = require('../../models/college.model');
const hooks = require('./college.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/college', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('college');

  service.hooks(hooks);
};
