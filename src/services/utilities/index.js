'use strict';

const packageInfo = require('../../../package.json');

module.exports = function () {
  const app = this;

  app.get('/version', function (req, res) {
    res.send({ version: packageInfo.version });
  });

  app.get('/healthcheck', function (req, res) {
    Promise.all([
      app.db.product.count(),
      app.db.store.count(),
      app.db.category.count()
    ]).then(dbValues => {
      res.send({
        uptime: process.uptime(),
        readonly: app.get('readonly'),
        documents: {
          products: dbValues[0],
          stores: dbValues[1],
          categories: dbValues[2]
        }
      });
    }).catch(reason => {
      res.status(500).send({ error: reason });
    });
  });
};
