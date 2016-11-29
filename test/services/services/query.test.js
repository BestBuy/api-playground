'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

describe('services query API', function () {
  it('can get default list', function (done) {
    request(app)
      .get('/services')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.total);
        assert.equal(body.data.length, 10);
        done();
      });
  });

  it('allows pagination', function (done) {
    request(app)
      .get('/services?$limit=3&$skip=5')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.equal(body.skip, 5);
        assert.equal(body.data.length, 3);
        done();
      });
  });

  it('can search on partial service name', function (done) {
    request(app)
      .get('/services?name[$like]=*Kitchen*')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });
});
