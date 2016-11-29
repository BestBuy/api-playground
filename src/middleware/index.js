'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');
const swagger = require('./swagger');
const markdownPages = require('./markdown-pages');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.configure(swagger);
  app.configure(markdownPages);
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
