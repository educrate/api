// Initializes the `review` service on path `/review`
const createService = require('feathers-sequelize');
const createModel = require('../../models/review.model');
const hooks = require('./review.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/review', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('review');

  service.hooks(hooks);
};
