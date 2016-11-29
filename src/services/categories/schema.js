module.exports = {
  'title': 'Category Schema',
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'required': [ 'id', 'name' ],
  'additionalProperties': false,
  'properties': {
    'name': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    },
    'id': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    }
  }
};
