// Initializes the `tutee` service on path `/tutee`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tutee.model');
const hooks = require('./tutee.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tutee', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tutee');

  service.hooks(hooks);
};
