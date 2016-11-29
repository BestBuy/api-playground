'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const request = require('supertest');

describe('stores get API', function () {
  it('can get store by id', function (done) {
    request(app)
      .get(`/stores/${store.id}`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.deepEqual(body, store);
        assert.equal(body.name, store.name);

        done();
      });
  });

  it('can get store by id and select only name and id', function (done) {
    request(app)
      .get(`/stores/${store.id}?$select[]=name&$select[]=hours`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.equal(body.id, store.id);
        assert.equal(body.name, store.name);
        assert.equal(body.hours, store.hours);
        assert.equal(Object.keys(body).length, 3);

        done();
      });
  });

  it('returns 404 for bad store id', function (done) {
    request(app)
      .get('/stores/99999')
      .expect(404, done);
  });
});

const store = {
  'id': 7,
  'name': 'Roseville',
  'type': 'BigBox',
  'address': '1643 County Road B2',
  'address2': '',
  'city': 'Roseville',
  'state': 'MN',
  'zip': '55113',
  'lat': 45.01651,
  'lng': -93.168518,
  'hours': 'Mon: 10-9; Tue: 10-9; Wed: 10-9; Thurs: 10-9; Fri: 10-9; Sat: 10-9; Sun: 10-8',
  'createdAt': '2016-11-17T17:57:05.853Z',
  'updatedAt': '2016-11-17T17:57:05.853Z',
  'services': [
    {
      'id': 1,
      'name': 'Geek Squad Services',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 1
      }
    },
    {
      'id': 2,
      'name': 'Best Buy Mobile',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 2
      }
    },
    {
      'id': 3,
      'name': 'Best Buy For Business',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 3
      }
    },
    {
      'id': 4,
      'name': 'Apple Shop',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 4
      }
    },
    {
      'id': 5,
      'name': 'Hablamos Español',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 5
      }
    },
    {
      'id': 6,
      'name': 'Camera Experience Shop ',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 6
      }
    },
    {
      'id': 7,
      'name': 'Electronics Recycling',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 7
      }
    },
    {
      'id': 8,
      'name': 'Magnolia Home Theater',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 8
      }
    },
    {
      'id': 10,
      'name': 'Windows Store',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 10
      }
    },
    {
      'id': 11,
      'name': 'Samsung Experience',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 11
      }
    },
    {
      'id': 12,
      'name': 'Car & GPS Installation Services',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 12
      }
    },
    {
      'id': 15,
      'name': 'Best Buy Marine Powered by Geek Squad',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 15
      }
    },
    {
      'id': 18,
      'name': 'Geek Squad Solution Central',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 18
      }
    },
    {
      'id': 19,
      'name': 'Pacific Kitchen & Home',
      'createdAt': '2016-11-17T17:56:35.881Z',
      'updatedAt': '2016-11-17T17:56:35.881Z',
      'storeservices': {
        'createdAt': '2016-11-17T17:57:09.417Z',
        'updatedAt': '2016-11-17T17:57:09.417Z',
        'storeId': 7,
        'serviceId': 19
      }
    }
  ]
};
