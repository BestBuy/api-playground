'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const request = require('supertest');

describe('services get API', function () {
  it('can get service by id', function (done) {
    request(app)
      .get(`/services/${service.id}`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.deepEqual(body, service);
        assert.equal(body.name, service.name);

        done();
      });
  });

  it('can get service by id and select only name and id', function (done) {
    request(app)
      .get(`/services/${service.id}?$select[]=name`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.equal(body.id, service.id);
        assert.equal(body.name, service.name);
        assert.equal(Object.keys(body).length, 2);

        done();
      });
  });

  it('returns 404 for bad service id', function (done) {
    request(app)
      .get('/services/123')
      .expect(404, done);
  });
});

const service = {
  'id': 1,
  'name': 'Geek Squad Services',
  'createdAt': '2016-11-17T17:56:35.881Z',
  'updatedAt': '2016-11-17T17:56:35.881Z'
};
