module.exports = {
  paths: {
    '/services': {
      'get': {
        tags: ['services'],
        'description': 'Returns all services that match the given filter criteria. If no filters are included, defaults to returning a paginated list of all services.',
        'operationId': 'findServices',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': '$limit',
            'in': 'query',
            'description': 'Limit the number of services returned.',
            'required': false,
            'type': 'integer'
          },
          {
            'name': '$skip',
            'in': 'query',
            'description': 'Skip the specified number of services.',
            'required': false,
            'type': 'integer'
          }
        ],
        'responses': {
          '200': {
            'description': 'Service response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/service'
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
        tags: ['services'],
        'description': 'Creates a new service',
        'operationId': 'addService',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'service',
            'in': 'body',
            'description': 'Service to add',
            'required': true,
            'schema': {
              '$ref': '#/definitions/service'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Empty response'
          },
          '400': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/errorModel'
            }
          }
        }
      }
    },
    '/services/{id}': {
      'get': {
        tags: ['services'],
        'description': 'Returns a services based on service ID',
        'operationId': 'findServiceById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of service to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Service response',
            'schema': {
              '$ref': '#/definitions/service'
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
        tags: ['services'],
        'description': 'Updates a services based on service ID',
        'operationId': 'updateServiceById',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of service to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          },
          {
            'name': 'service',
            'in': 'body',
            'description': 'Service attributes to update',
            'required': true,
            'schema': {
              '$ref': '#/definitions/service'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'Service response',
            'schema': {
              '$ref': '#/definitions/service'
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
        tags: ['services'],
        'description': 'Deletes a single service based on the ID supplied',
        'operationId': 'deleteservice',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of service to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'Service deleted'
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
    'service': require('./schema.js')
  }
};
