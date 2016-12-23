'use strict';
const products = require('./products');
const stores = require('./stores');
const services = require('./services');
const categories = require('./categories');
const utilities = require('./utilities');
const db = require('../db');

module.exports = function () {
  const app = this;
  app.configure(db); // setup app.db

  app.configure(products);
  app.configure(stores);
  app.configure(services);
  app.configure(categories);
  app.configure(utilities);
};
