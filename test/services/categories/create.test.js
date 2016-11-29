'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');
var categorySchema = require('../../../src/services/categories/schema');

describe('categories service', function () {
  it('registered the categories service', () => {
    assert.ok(app.service('categories'));
  });

  it('honors required fields when validating', function (done) {
    // Post a blank body so we get all the required errors
    request(app)
      .post('/categories')
      .expect(400)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var validationErrors = result.body.errors;
        var requiredFields = categorySchema.required;
        assert.equal(requiredFields.length, validationErrors.length);
        requiredFields.forEach(field => {
          // Make sure there's an error message that matches each required field
          assert.ok(validationErrors.filter(error => error.indexOf(field) >= 0)[0]);
        });
        done();
      });
  });

  it('allows category creation when valid category data is passed', function (done) {
    request(app)
      .post('/categories')
      .send({
        name: 'Test Category',
        id: 'pcat12345657788'
      })
      .expect(201)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var id = result.body.id;
        assert.equal(id, 'pcat12345657788');
        done();
      });
  });
});
