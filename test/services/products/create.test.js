'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');
var productSchema = require('../../../src/services/products/schema');

describe('products service', function () {
  beforeEach(function (done) {
    app.set('readonly', false);
    done();
  });

  it('registered the products service', () => {
    assert.ok(app.service('products'));
  });

  it('denies write attempts when in readonly mode', function (done) {
    app.set('readonly', true);
    request(app)
      .post('/products')
      .expect(405)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        done();
      });
  });

  it('honors required fields when validating', function (done) {
    // Post a blank body so we get all the required errors
    request(app)
      .post('/products')
      .expect(400)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var validationErrors = result.body.errors;
        var requiredFields = productSchema.required;
        assert.equal(requiredFields.length, validationErrors.length);
        requiredFields.forEach(field => {
          // Make sure there's an error message that matches each required field
          assert.ok(validationErrors.filter(error => error.indexOf(field) >= 0)[0]);
        });
        done();
      });
  });

  it('enforces correct price format', function (done) {
    request(app)
      .post('/products')
      .send({
        name: 'Test Product With Categories',
        description: 'This is a test product with categories',
        upc: '123',
        type: 'Electronics',
        model: 'Product354546',
        price: 100.111 // invalid price
      })
      .expect(400)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var validationErrors = result.body.errors;
        assert.equal(validationErrors.length, 1);
        assert.equal(validationErrors[0], "'price' should be multiple of 0.01");
        done();
      });
  });

  it('allows product creation when valid product data is passed', function (done) {
    request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        upc: '12345',
        type: 'Electronics',
        model: 'Product0123'
      })
      .expect(201)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        // Ensure we got an auto-generated ID
        var id = result.body.id;
        assert.ok(id);
        done();
      });
  });
});
