// Initializes the `instructor` service on path `/instructor`
const createService = require('feathers-sequelize');
const createModel = require('../../models/instructor.model');
const hooks = require('./instructor.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/instructor', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('instructor');

  service.hooks(hooks);
};
