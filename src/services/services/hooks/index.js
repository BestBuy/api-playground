'use strict';

const globalHooks = require('../../../hooks');
var validateSchema = require('../../../hooks/validate-schema');
var serviceSchema = require('../schema');

exports.before = {
  all: [],
  find: [globalHooks.allowNull(), globalHooks.wildcardsInLike()],
  get: [],
  create: [validateSchema(serviceSchema)],
  update: [validateSchema(serviceSchema)],
  patch: [],
  remove: []
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
