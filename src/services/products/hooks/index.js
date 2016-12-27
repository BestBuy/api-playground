'use strict';

const globalHooks = require('../../../hooks');
var validateSchema = require('../../../hooks/validate-schema');
var productSchema = require('../schema');

exports.before = {
  all: [],
  find: [includeAssociatedModels, findbyCategoryName, findCategoryById, globalHooks.allowNull(), globalHooks.wildcardsInLike()],
  get: [includeAssociatedModels],
  create: [globalHooks.errorIfReadonly, validateSchema(productSchema)],
  update: [globalHooks.errorIfReadonly, validateSchema(productSchema)],
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
      model: hook.app.db.category, as: 'categories', through: {attributes: []}
    }]
  };
}

function findCategoryById (hook) {
  /*
    This makes both of these work:
    /products?category[id]=abcat0208002
    /products?category.id=abcat0208002
  */
  let catId;
  let q = hook.params.query;
  if (q['category.id']) {
    catId = q['category.id'];
    delete q['category.id'];
  } else if (q.category && q.category.id) {
    catId = q.category.id;
    delete q.category;
  }

  if (catId) {
    q.id = {
      // a bit gnarly but works https://github.com/sequelize/sequelize/issues/1869
      $in: hook.app.db.Sequelize.literal(`(
        SELECT DISTINCT productId from productcategory
        INNER JOIN categories on categories.id = productcategory.categoryId
        where categories.id = '${catId}')`)
    };
  }
}

function findbyCategoryName (hook) {
  /*
    This makes both of these work:
    /products?category[name]=Coffee%20Pods
    /products?category.name=Coffee%20Pods
  */
  let catName;
  let q = hook.params.query;
  if (q['category.name']) {
    catName = q['category.name'];
    delete q['category.name'];
  } else if (q.category && q.category.name) {
    catName = q.category.name;
    delete q.category;
  }

  if (catName) {
    q.id = {
      // a bit gnarly but works https://github.com/sequelize/sequelize/issues/1869
      $in: hook.app.db.Sequelize.literal(`(
        SELECT DISTINCT productId from productcategory
        INNER JOIN categories on categories.id = productcategory.categoryId
        where categories.name = '${catName}')`)
    };
  }
}
