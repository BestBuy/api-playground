'use strict';

const assert = require('assert');
const app = require('../../../src/app');
const request = require('supertest');

describe('categories get API', function () {
  it('can get category by id', function (done) {
    request(app)
      .get(`/categories/${category.id}`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.deepEqual(body, category);
        assert.equal(body.name, category.name);

        done();
      });
  });

  it('can get category by id and select only name and id', function (done) {
    request(app)
      .get(`/categories/${category.id}?$select[]=name`)
      .expect(200)
      .end(function (err, result) {
        if (err) { assert.ifError(err); }
        let body = result.body;

        assert.equal(body.id, category.id);
        assert.equal(body.name, category.name);
        assert.equal(Object.keys(body).length, 2);

        done();
      });
  });

  it('returns 404 for bad category id', function (done) {
    request(app)
      .get('/categories/123')
      .expect(404, done);
  });
});

const category = {
  'id': 'abcat0010000',
  'name': 'Gift Ideas',
  'createdAt': '2016-11-17T17:57:04.285Z',
  'updatedAt': '2016-11-17T17:57:04.285Z',
  'subCategories': [
    {
      'id': 'abcat0020004',
      'name': 'Unique Gifts',
      'createdAt': '2016-11-17T17:57:04.285Z',
      'updatedAt': '2016-11-17T17:57:04.285Z'
    },
    {
      'id': 'pcmcat748300579354',
      'name': 'Family Gift Ideas',
      'createdAt': '2016-11-17T17:57:04.899Z',
      'updatedAt': '2016-11-17T17:57:04.899Z'
    },
    {
      'id': 'pcmcat748301108075',
      'name': 'Stocking Stuffers',
      'createdAt': '2016-11-17T17:57:04.899Z',
      'updatedAt': '2016-11-17T17:57:04.899Z'
    },
    {
      'id': 'pcmcat84000050000',
      'name': 'Weddings',
      'createdAt': '2016-11-17T17:57:05.399Z',
      'updatedAt': '2016-11-17T17:57:05.399Z'
    },
    {
      'id': 'pcmcat84000050001',
      'name': 'Anniversaries',
      'createdAt': '2016-11-17T17:57:05.399Z',
      'updatedAt': '2016-11-17T17:57:05.399Z'
    },
    {
      'id': 'pcmcat84000050002',
      'name': 'Business Gifts',
      'createdAt': '2016-11-17T17:57:05.399Z',
      'updatedAt': '2016-11-17T17:57:05.399Z'
    },
    {
      'id': 'pcmcat84000050004',
      'name': 'Baby Showers',
      'createdAt': '2016-11-17T17:57:05.399Z',
      'updatedAt': '2016-11-17T17:57:05.399Z'
    },
    {
      'id': 'pcmcat94300050028',
      'name': 'Birthdays',
      'createdAt': '2016-11-17T17:57:05.399Z',
      'updatedAt': '2016-11-17T17:57:05.399Z'
    }
  ],
  'categoryPath': [
    {
      'id': 'abcat0010000',
      'name': 'Gift Ideas',
      'createdAt': '2016-11-17T17:57:04.285Z',
      'updatedAt': '2016-11-17T17:57:04.285Z'
    }
  ]
};
