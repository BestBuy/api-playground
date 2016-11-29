'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

describe('products query API', function () {
  it('can get default list', function (done) {
    request(app)
      .get('/products')
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
      .get('/products?$limit=15&$skip=15')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.equal(body.skip, 15);
        assert.equal(body.data.length, 15);
        done();
      });
  });

  it('can search on partial product names', function (done) {
    request(app)
      .get('/products?name[$like]=*TV*')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        assert.ok(body.total > body.data.length);
        done();
      });
  });

  it('can search using category names', function (done) {
    request(app)
      .get('/products?category.name=TVs')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        assert.ok(body.total > body.data.length);
        done();
      });
  });

  it('can search using category names alternative', function (done) {
    request(app)
      .get('/products?category[name]=TVs')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        assert.ok(body.total > body.data.length);
        done();
      });
  });

  it('can search using category id', function (done) {
    request(app)
      .get('/products?category.id=abcat0101000')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        assert.ok(body.total > body.data.length);
        done();
      });
  });

  it('can search using category id alternative', function (done) {
    request(app)
      .get('/products?category[id]=abcat0101000')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        assert.ok(body.total > body.data.length);
        done();
      });
  });

  it('can sort by price', function (done) {
    request(app)
      .get('/products?$sort[price]=-1&category.name=TVs')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        assert.ok(body.data[0].price > body.data[9].price);
        done();
      });
  });

  it('can select a subset of properties properties', function (done) {
    request(app)
      .get('/products?$select[]=name&$select[]=description')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        var product = body.data[0];
        var keys = Object.keys(product);
        assert.equal(keys.length, 2);
        assert.ok(keys.indexOf('name') >= 0);
        assert.ok(keys.indexOf('description') >= 0);
        assert.ok(keys.indexOf('price') === -1);
        done();
      });
  });
});
