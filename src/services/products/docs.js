module.exports = {
  paths: {
    '/products': {
      'get': {
        tags: ['products'],
        'description': 'Returns all products that match the given filter criteria. If no filters are included, defaults to returning a paginated list of all products.',
        'operationId': 'findProducts',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': '$limit',
            'in': 'query',
            'description': 'Limit the number of products returned.',
            'required': false,
            'type': 'integer'
          },
          {
            'name': '$skip',
            'in': 'query',
            'description': 'Skip the specified number of products.',
            'required': false,
            'type': 'integer'
          }
        ],
        'responses': {
          '200': {
            'description': 'Product response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/product'
              }
            }
          },
          '400': {
            'description': 'Error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      },
      'post': {
        tags: ['products'],
        'description': 'Creates a new product',
        'operationId': 'addProduct',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'product',
            'in': 'body',
            'description': 'Product to add',
            'required': true,
            'schema': {
              '$ref': '#/definitions/product'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Empty response'
          },
          '400': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      }
    },
    '/products/{id}': {
      'get': {
        tags: ['products'],
        'description': 'Returns a product based on an ID,',
        'operationId': 'findProductById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of product to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Product response',
            'schema': {
              '$ref': '#/definitions/product'
            }
          },
          '400': {
            'description': 'Error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      },
      'patch': {
        tags: ['products'],
        'description': 'Updates a product based on an ID,',
        'operationId': 'updateProductById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of product to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          },
          {
            'name': 'product',
            'in': 'body',
            'description': 'Product attributes to update',
            'required': true,
            'schema': {
              '$ref': '#/definitions/product'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Product response',
            'schema': {
              '$ref': '#/definitions/product'
            }
          },
          '400': {
            'description': 'Error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      },
      'delete': {
        tags: ['products'],
        'description': 'Deletes a single product based on the ID supplied',
        'operationId': 'deleteProduct',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of product to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Product deleted'
          },
          '400': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'product': require('./schema.js')
  }
};
