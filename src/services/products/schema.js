module.exports = {
  'title': 'Product Schema',
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'required': [ 'name', 'type', 'upc', 'description', 'model' ],
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
    'price': {
      'name': 'Price',
      'description': 'The Price Of the Product',
      'type': 'number',
      'multipleOf': 0.01
    },
    'shipping': {
      'type': 'number',
      'multipleOf': 0.01
    },
    'upc': {
      'type': 'string',
      'maxLength': 15,
      'minLength': 1
    },
    'description': {
      'type': 'string',
      'maxLength': 100,
      'minLength': 1
    },
    'manufacturer': {
      'type': 'string',
      'maxLength': 50,
      'minLength': 1
    },
    'model': {
      'type': 'string',
      'maxLength': 25,
      'minLength': 1
    },
    'url': {
      'type': 'string',
      'maxLength': 500,
      'minLength': 1
    },
    'image': {
      'type': 'string',
      'maxLength': 500,
      'minLength': 1
    }
  }
};
