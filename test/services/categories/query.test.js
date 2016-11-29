'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

describe('categories query API', function () {
  it('can get default list', function (done) {
    request(app)
      .get('/categories')
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
      .get('/categories?$limit=15&$skip=15')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.equal(body.skip, 15);
        assert.equal(body.data.length, 15);
        done();
      });
  });

  it('can search on partial category name', function (done) {
    request(app)
      .get('/categories?name[$like]=*TV*')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });
});
