'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const request = require('supertest');

describe('products get API', function () {
  it('can get product by id', function (done) {
    request(app)
      .get(`/products/${product.id}`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.deepEqual(body, product);
        assert.equal(body.name, product.name);

        done();
      });
  });

  it('can get product by id and select only name and price', function (done) {
    request(app)
      .get(`/products/${product.id}?$select[]=price&$select[]=name`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.equal(body.id, product.id);
        assert.equal(body.name, product.name);
        assert.equal(body.price, product.price);
        assert.equal(Object.keys(body).length, 3);

        done();
      });
  });

  it('returns 404 for bad product id', function (done) {
    request(app)
      .get('/products/123')
      .expect(404, done);
  });
});

const product = {
  'id': 7425383,
  'name': 'Super Mario Maker - Nintendo Wii U',
  'type': 'Game',
  'price': 59.99,
  'upc': '045496903756',
  'shipping': 0,
  'description': 'Design, create and complete the custom Mario levels of your dreams',
  'manufacturer': 'Nintendo',
  'model': '12345',
  'url': 'http://www.bestbuy.com/site/super-mario-maker-nintendo-wii-u/7425383.p?id=1219269869006&skuId=7425383&cmp=RMXCC',
  'image': 'http://img.bbystatic.com/BestBuy_US/images/products/7425/7425383_sa.jpg',
  'createdAt': '2016-11-17T18:01:06.648Z',
  'updatedAt': '2016-11-17T18:01:06.648Z',
  'categories': [
    {
      'id': 'abcat0700000',
      'name': 'Video Games',
      'createdAt': '2016-11-17T17:57:04.285Z',
      'updatedAt': '2016-11-17T17:57:04.285Z'
    },
    {
      'id': 'pcmcat273800050036',
      'name': 'Wii U',
      'createdAt': '2016-11-17T17:57:05.600Z',
      'updatedAt': '2016-11-17T17:57:05.600Z'
    },
    {
      'id': 'pcmcat274600050017',
      'name': 'Wii U Games',
      'createdAt': '2016-11-17T17:57:05.600Z',
      'updatedAt': '2016-11-17T17:57:05.600Z'
    }
  ]
};
