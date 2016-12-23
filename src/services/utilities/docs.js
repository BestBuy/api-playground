module.exports = {
  paths: {
    '/version': {
      'get': {
        tags: ['utilities'],
        'description': 'Returns the current version of the API Playground being run',
        'operationId': 'getVersion',
        'produces': [
          'application/json'
        ],
        'responses': {
          '200': {
            'description': 'Version response'
          }
        }
      }
    },
    '/healthcheck': {
      'get': {
        tags: ['utilities'],
        'description': 'Returns healthcheck information about the system',
        'operationId': 'getHealthcheck',
        'produces': [
          'application/json'
        ],
        'responses': {
          '200': {
            'description': 'Healthcheck response'
          },
          '500': {
            'description': 'Error'
          }
        }
      }
    }
  }
};
