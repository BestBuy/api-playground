'use strict';

const assert = require('assert');
const app = require('../../../src/app');
var request = require('supertest');

describe('stores query API', function () {
  it('can get default list', function (done) {
    request(app)
      .get('/stores')
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
      .get('/stores?$limit=15&$skip=15')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.equal(body.skip, 15);
        assert.equal(body.data.length, 15);
        done();
      });
  });

  it('can search on partial store names', function (done) {
    request(app)
      .get('/stores?name[$like]=*Richfield*')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });

  it('can search nearby stores', function (done) {
    request(app)
      .get('/stores?near=90210')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.equal(body.data[0].city, 'Los Angeles');
        assert.ok(body.total < 20);
        done();
      });
  });

  it('can search based on services offered', function (done) {
    request(app)
      .get('/stores?service.name=Best Buy Mobile')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });

  it('can search based on services offered - alternative', function (done) {
    request(app)
      .get('/stores?service[name]=Best Buy Mobile')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });

  it('can search based on service id offered', function (done) {
    request(app)
      .get('/stores?service.id=2')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });

  it('can search based on service id - alternative', function (done) {
    request(app)
      .get('/stores?service[id]=2')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        done();
      });
  });

  it('can select a subset of stores properties', function (done) {
    request(app)
      .get('/stores?$select[]=name&$select[]=hours')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        var body = result.body;
        assert.ok(body.data.length > 0);
        var store = body.data[0];
        var keys = Object.keys(store);
        assert.equal(keys.length, 2);
        assert.ok(keys.indexOf('name') >= 0);
        assert.ok(keys.indexOf('hours') >= 0);
        assert.ok(keys.indexOf('price') === -1);
        done();
      });
  });
});
