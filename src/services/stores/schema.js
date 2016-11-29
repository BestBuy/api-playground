module.exports = {
  'title': 'Store Schema',
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'required': [ 'name', 'address', 'city', 'state', 'zip' ],
  'additionalProperties': false,
  'properties': {
    'name': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    },
    'type': {
      'type': 'string',
      'maxLength': 30,
      'minLength': 1
    },
    'address': {
      'type': 'string',
      'maxLength': 50,
      'minLength': 1
    },
    'address2': {
      'type': 'string',
      'maxLength': 30
    },
    'city': {
      'type': 'string',
      'maxLength': 50,
      'minLength': 1
    },
    'state': {
      'type': 'string',
      'maxLength': 30,
      'minLength': 1
    },
    'zip': {
      'type': 'string',
      'maxLength': 30,
      'minLength': 1
    },
    'lat': {
      'type': 'number'
    },
    'lng': {
      'type': 'number'
    },
    'hours': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    },
    'services': {
      'type': 'object'
    }
  }
};
