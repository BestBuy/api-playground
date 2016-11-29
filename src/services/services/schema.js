module.exports = {
  'title': 'Service Schema',
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'required': [ 'name' ],
  'additionalProperties': false,
  'properties': {
    'name': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    }
  }
};
