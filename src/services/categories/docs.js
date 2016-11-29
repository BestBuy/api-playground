module.exports = {
  paths: {
    '/categories': {
      'get': {
        tags: ['categories'],
        'description': 'Returns all categories that match the given filter criteria. If no filters are included, defaults to returning a paginated list of all categories.',
        'operationId': 'findCategories',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': '$limit',
            'in': 'query',
            'description': 'Limit the number of categories returned.',
            'required': false,
            'type': 'integer'
          },
          {
            'name': '$skip',
            'in': 'query',
            'description': 'Skip the specified number of categories.',
            'required': false,
            'type': 'integer'
          }
        ],
        'responses': {
          '200': {
            'description': 'Category response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/category'
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
        tags: ['categories'],
        'description': 'Creates a new category',
        'operationId': 'addCategory',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'category',
            'in': 'body',
            'description': 'Category to add',
            'required': true,
            'schema': {
              '$ref': '#/definitions/category'
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
    '/categories/{id}': {
      'get': {
        tags: ['categories'],
        'description': 'Returns a categories based on category ID',
        'operationId': 'findCategoryById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of category to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Category response',
            'schema': {
              '$ref': '#/definitions/category'
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
        tags: ['categories'],
        'description': 'Updates a categories based on category ID',
        'operationId': 'updateCategoryById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of category to update',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          },
          {
            'name': 'category',
            'in': 'body',
            'description': 'Category attributes to update',
            'required': true,
            'schema': {
              '$ref': '#/definitions/category'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Category response',
            'schema': {
              '$ref': '#/definitions/category'
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
        tags: ['categories'],
        'description': 'Deletes a single category based on the ID supplied',
        'operationId': 'deletecategory',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of category to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Category deleted'
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
    'category': require('./schema.js')
  }
};
