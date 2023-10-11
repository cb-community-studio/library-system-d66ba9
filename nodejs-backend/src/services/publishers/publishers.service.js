const { Publishers } = require('./publishers.class');
const createModel = require('../../models/publishers.model');
const hooks = require('./publishers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/publishers', new Publishers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('publishers');

  service.hooks(hooks);
};