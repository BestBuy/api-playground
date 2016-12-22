'use strict';
const serveStatic = require('feathers').static;
const path = require('path');
const productDocs = require('../../services/products/docs');
const storeDocs = require('../../services/stores/docs');
const serviceDocs = require('../../services/services/docs');
const categoryDocs = require('../../services/categories/docs');
const utilityDocs = require('../../services/utilities/docs');
const swaggerJson = require('./swagger.js');

swaggerJson.paths = Object.assign({},
  swaggerJson.paths,
  productDocs.paths,
  storeDocs.paths,
  serviceDocs.paths,
  categoryDocs.paths,
  utilityDocs.paths);
swaggerJson.definitions = Object.assign({},
  swaggerJson.definitions,
  productDocs.definitions,
  storeDocs.definitions,
  serviceDocs.definitions,
  categoryDocs.definitions,
  utilityDocs.definitions);

const swaggerLib = path.join(__dirname, '..', '..', '..', 'node_modules', 'swagger-ui', 'dist', 'lib');

module.exports = function () {
  let app = this;

  app.use('/docs/lib', serveStatic(swaggerLib));
  app.use('/docs', serveStatic(path.join(__dirname, 'swagger-ui')));
  app.get('/swagger.json', (req, res) => res.json(swaggerJson));
};
