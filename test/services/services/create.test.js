'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');
var servicesSchema = require('../../../src/services/services/schema');

describe('services service', function () {
  beforeEach(function (done) {
    app.set('readonly', false);
    done();
  });

  it('registered the services service', () => {
    assert.ok(app.service('services'));
  });

  it('denies write attempts when in readonly mode', function (done) {
    app.set('readonly', true);
    request(app)
      .post('/services')
      .expect(405)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        done();
      });
  });

  it('honors required fields when validating', function (done) {
    // Post a blank body so we get all the required errors
    request(app)
      .post('/services')
      .expect(400)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var validationErrors = result.body.errors;
        var requiredFields = servicesSchema.required;
        assert.equal(requiredFields.length, validationErrors.length);
        requiredFields.forEach(field => {
          // Make sure there's an error message that matches each required field
          assert.ok(validationErrors.filter(error => error.indexOf(field) >= 0)[0]);
        });
        done();
      });
  });

  it('allows service creation when valid service data is passed', function (done) {
    request(app)
      .post('/services')
      .send({
        name: 'Test Service'
      })
      .expect(201)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var id = result.body.id;
        assert.ok(id);
        done();
      });
  });
});
