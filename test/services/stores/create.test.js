'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');
var storesSchema = require('../../../src/services/stores/schema');

describe('stores service', function () {
  beforeEach(function (done) {
    app.set('readonly', false);
    done();
  });

  it('registered the stores service', () => {
    assert.ok(app.service('stores'));
  });

  it('denies write attempts when in readonly mode', function (done) {
    app.set('readonly', true);
    request(app)
      .post('/stores')
      .expect(405)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        done();
      });
  });

  it('honors required fields when validating', function (done) {
    // Post a blank body so we get all the required errors
    request(app)
      .post('/stores')
      .expect(400)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var validationErrors = result.body.errors;
        var requiredFields = storesSchema.required;
        assert.equal(requiredFields.length, validationErrors.length);
        requiredFields.forEach(field => {
          // Make sure there's an error message that matches each required field
          assert.ok(validationErrors.filter(error => error.indexOf(field) >= 0)[0]);
        });
        done();
      });
  });

  it('allows store creation when valid store data is passed', function (done) {
    request(app)
      .post('/stores')
      .send({
        name: 'Test Store',
        address: '123 Fake Street',
        city: 'Richfield',
        state: 'MN',
        zip: '55437'
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
