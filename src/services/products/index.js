'use strict';

const service = require('feathers-sequelize');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  let options = {
    Model: app.db.product,
    paginate: {
      default: 10,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/products', service(options));

  // Get our initialize service to that we can bind hooks
  const productsService = app.service('/products');

  // Set up our before hooks
  productsService.before(hooks.before);

  // Set up our after hooks
  productsService.after(hooks.after);
};
