'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  let options = {
    Model: app.db.service,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/services', service(options));

  // Get our initialize service to that we can bind hooks
  const servicesService = app.service('/services');

  // Set up our before hooks
  servicesService.before(hooks.before);

  // Set up our after hooks
  servicesService.after(hooks.after);
};
