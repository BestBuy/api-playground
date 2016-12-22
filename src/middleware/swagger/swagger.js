'use strict';

var packageInfo = require('../../../package.json');

module.exports = {
  'swagger': '2.0',
  'info': {
    'version': packageInfo.version,
    'title': 'Best Buy API Playground',
    'description': 'A sample dataset and API for you to experiment with.',
    'contact': {
      'name': 'Best Buy API team',
      'email': 'developer@bestbuy.com'
    }
  },
  'host': 'localhost:3030',
  'basePath': '/',
  'schemes': [
    'http'
  ],
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'tags': [
    {
      name: 'products',
      description: 'Find, create, update and remove products'
    },
    {
      name: 'stores',
      description: 'Find, create, update and remove stores'
    },
    {
      name: 'services',
      description: 'Find, create, update and remove in-store services'
    },
    {
      name: 'categories',
      description: 'Find, create, update and remove product categories'
    },
    {
      name: 'utilities',
      description: 'API application functionality for monitoring version and health information'
    }
  ],
  'paths': {
  },
  'definitions': {
    'errorModel': {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        message: {
          type: 'string'
        },
        code: {
          type: 'integer'
        },
        className: {
          type: 'string'
        },
        errors: {
          type: 'object'
        }
      }
    }
  }
};
