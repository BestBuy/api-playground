module.exports = {
  paths: {
    '/stores': {
      'get': {
        tags: ['stores'],
        'description': 'Returns all stores that match the given filter criteria. If no filters are included, defaults to returning a paginated list of all stores.',
        'operationId': 'findStores',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': '$limit',
            'in': 'query',
            'description': 'Limit the number of stores returned.',
            'required': false,
            'type': 'integer'
          },
          {
            'name': '$skip',
            'in': 'query',
            'description': 'Skip the specified number of stores.',
            'required': false,
            'type': 'integer'
          }
        ],
        'responses': {
          '200': {
            'description': 'Store response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/store'
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
        tags: ['stores'],
        'description': 'Creates a new store',
        'operationId': 'addStore',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'store',
            'in': 'body',
            'description': 'Store to add',
            'required': true,
            'schema': {
              '$ref': '#/definitions/store'
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
    '/stores/{id}': {
      'get': {
        tags: ['stores'],
        'description': 'Returns a store based on store ID',
        'operationId': 'findStoreById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of store to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Store response',
            'schema': {
              '$ref': '#/definitions/store'
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
        tags: ['stores'],
        'description': 'Updates a store based on store ID',
        'operationId': 'updateStoreById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of store to update',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          },
          {
            'name': 'store',
            'in': 'body',
            'description': 'Store attributes to update',
            'required': true,
            'schema': {
              '$ref': '#/definitions/store'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Store response',
            'schema': {
              '$ref': '#/definitions/store'
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
        tags: ['stores'],
        'description': 'Deletes a single store based on the ID supplied',
        'operationId': 'deletestore',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of store to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Store deleted'
          },
          '400': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'store': require('./schema.js')
  }
};
