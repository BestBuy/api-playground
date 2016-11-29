'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);

module.exports = setupDatabase;

function setupDatabase () {
  const app = this;

  var config = {
    database: 'apiboxdb',
    username: 'username',
    password: 'password',
    host: 'localhost',
    dialect: 'sqlite',
    logging: msg => app.logger.debug(msg),
    storage: 'dataset.sqlite'
  };

  if (process.env.NODE_ENV === 'test') {
    config.storage = 'test/testdb.sqlite';
  }

  var sequelize = new Sequelize(config.database, config.username, config.password, config);

  var db = {};

  fs.readdirSync(__dirname)
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  // set app.db for convenience
  app.db = db;

  return db;
}
