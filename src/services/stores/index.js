'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  let options = {
    Model: app.db.store,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/stores', service(options));

  // Get our initialize service to that we can bind hooks
  const storesService = app.service('/stores');

  // Set up our before hooks
  storesService.before(hooks.before);

  // Set up our after hooks
  storesService.after(hooks.after);
};
