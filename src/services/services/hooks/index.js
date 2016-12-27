'use strict';

const globalHooks = require('../../../hooks');
var validateSchema = require('../../../hooks/validate-schema');
var serviceSchema = require('../schema');

exports.before = {
  all: [],
  find: [globalHooks.allowNull(), globalHooks.wildcardsInLike()],
  get: [],
  create: [globalHooks.errorIfReadonly, validateSchema(serviceSchema)],
  update: [globalHooks.errorIfReadonly, validateSchema(serviceSchema)],
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
