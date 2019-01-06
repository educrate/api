// Initializes the `tutor` service on path `/tutor`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tutor.model');
const hooks = require('./tutor.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tutor', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tutor');

  service.hooks(hooks);
};
