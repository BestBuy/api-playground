'use strict';

const globalHooks = require('../../../hooks');
var validateSchema = require('../../../hooks/validate-schema');
var storeSchema = require('../schema');
var findNearby = require('./findNearby');

exports.before = {
  all: [],
  find: [findNearby, includeAssociatedModels, findServiceByName, findServiceById, globalHooks.allowNull(), globalHooks.wildcardsInLike()],
  get: [includeAssociatedModels],
  create: [globalHooks.errorIfReadonly, validateSchema(storeSchema)],
  update: [globalHooks.errorIfReadonly, validateSchema(storeSchema)],
  patch: [globalHooks.errorIfReadonly],
  remove: [globalHooks.errorIfReadonly]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

function includeAssociatedModels (hook) {
  if (hook.params.query.$select) return; // if selecting specific columns, do not include
  hook.params.sequelize = {
    distinct: true, // must set this in order to get correct total count
    include: [{
      model: hook.app.db.service,
      as: 'services'
    }]
  };
}

function findServiceById (hook) {
  /*
    This makes both of these work:
    /products?service[id]=abcat0208002
    /products?service.id=abcat0208002
  */
  let serviceId;
  let q = hook.params.query;
  if (q['service.id']) {
    serviceId = q['service.id'];
    delete q['service.id'];
  } else if (q.service && q.service.id) {
    serviceId = q.service.id;
    delete q.service;
  }

  if (serviceId) {
    q.id = {
      // a bit gnarly but works https://github.com/sequelize/sequelize/issues/1869
      $in: hook.app.db.Sequelize.literal(`(
        SELECT DISTINCT storeId from storeservices
        INNER JOIN services on services.id = storeservices.serviceId
        where services.id = '${serviceId}')`)
    };
  }
}

function findServiceByName (hook) {
  /*
    This makes both of these work:
    /stores?service[name]=Best+Buy+Mobile
    /stores?service.name=Best+Buy+Mobile
  */
  let serviceName;
  let q = hook.params.query;
  if (q['service.name']) {
    serviceName = q['service.name'];
    delete q['service.name'];
  } else if (q.service && q.service.name) {
    serviceName = q.service.name;
    delete q.service;
  }

  if (serviceName) {
    q.id = {
      // a bit gnarly but works https://github.com/sequelize/sequelize/issues/1869
      $in: hook.app.db.Sequelize.literal(`(
        SELECT DISTINCT storeId from storeservices
        INNER JOIN services on services.id = storeservices.serviceId
        where services.name = '${serviceName}')`)
    };
  }
}
