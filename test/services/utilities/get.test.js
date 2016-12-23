'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const packageInfo = require('../../../package.json');
const request = require('supertest');

describe('utilities get API', function () {
  it('can get version of application', function (done) {
    request(app)
      .get('/version')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.equal(body.version, packageInfo.version);

        done();
      });
  });

  it('can get health of application', function (done) {
    request(app)
      .get('/healthcheck')
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.ok(body.uptime);
        assert.ok(body.documents.products);
        assert.ok(body.documents.stores);
        assert.ok(body.documents.categories);

        done();
      });
  });
});
