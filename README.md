# Best Buy API Playground

[![travis][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![semistandard][semistandard-image]][semistandard-url]

[travis-image]: https://img.shields.io/travis/BestBuy/api-playground.svg?style=flat-square
[travis-url]: https://travis-ci.org/BestBuy/api-playground
[coveralls-image]: https://coveralls.io/repos/github/BestBuy/api-playground/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/BestBuy/api-playground?branch=master
[semistandard-image]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
[semistandard-url]: http://npm.im/semistandard

### What the API Playground Is

The Best Buy API Playground is an API training tool for students, educators and other learners to explore the possibilities of a fully functional [RESTful API](http://www.restapitutorial.com/) in a simple, non-production environment. API Playground was developed by Best Buy and makes use of a [Creative Commons licensed](https://creativecommons.org/licenses/by-nc/4.0/) dataset including over 50,000 products and store-related information - making it easy for teaching APIs (both consumption and creation) to classrooms with realistic data. The playground supports full [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) (Create Read Update Delete) operations for all API endpoints and does not require any external services nor databases.

**Please note: This system is for educational and training purposes only. It behaves differently than Best Buy's actual API, uses an older version of our catalog, and does not represent any real-world data.**

API Playground makes use of solid API standards and best practices. It is designed to allow you to learn about an API framework in a local environment. Beyond being a fully functional API, it also includes several top-notch API tools such as the [Feathers Framework](http://feathersjs.com), [Mocha test framework](https://mochajs.org/), [Swagger](http://swagger.io/) and [Postman](https://www.getpostman.com/).

### What the API Playground Isn't

API Playground does not give users access to usable data from BestBuy.com or any production Best Buy APIs. For information on accessing Best Buy's complete API suite, check out https://developer.bestbuy.com/. API Playground isn't designed to be used in production environments, although many of its building blocks are production grade.

API Playground does not represent any guarantees of patterns or design principles used at Best Buy.

## Getting Started

Make sure you have [NodeJS](https://nodejs.org/) installed (we require version 4 or newer).

```bash
git clone https://github.com/bestbuy/api-playground/
cd api-playground
npm install
npm start
# Best Buy API Playground started at http://localhost:3030
```

Now open http://localhost:3030 in your browser to begin exploring the API. From there we'll guide you on using tools such as Swagger and Postman to get meaningful experience interacting with APIs.

## Configuration Options

Configuration settings are managed using [Feathers Configuration](https://docs.feathersjs.com/configuration/readme.html). The options
that you may want to adjust, depending on your usage, are:
* `port` - HTTP port where the API is listening. Defaults to 3030.
* `readonly` - If true, database cannot be modified (i.e. create, update, patch & remove operations are disabled). Defaults to false.

## Things That Power the Playground

Beyond all the great libraries (which are mentioned within the [package.json](package.json), such as [Sequelize](http://sequelizejs.com/)), here are some of the crucial components and resources that made assembling with API Playground possible:

__[Feathers](http://feathersjs.com)__

This project uses Feathers, an open source web framework for building modern real-time applications. Feathers does the majority of the heavy lifting within the application. It is an amazing framework that we highly recommend and enjoy using.

__[Swagger](http://swagger.io/)__

Swagger is a wonderful way to describe APIs, and coupled with [Swagger UI](https://github.com/swagger-api/swagger-ui) creates a great way to interact with them. It offers a nice sanity check that basically boils down to, "If you can't describe it in Swagger, it probably isn't a RESTful API."

__[Postman](https://www.getpostman.com/)__

Writing an API is only half the challenge, and consuming it is the other half. Within API Playground we include a [Postman Collection](https://www.getpostman.com/docs/collections) that helps developers learn how to interact with the API Playground for all CRUD operations and a couple interesting API operations. Another great aspect of Postman is the [generate code](https://www.getpostman.com/docs/creating_curl) functionality, which leads to repeatable  cURL commands as well as usable code in most popular languages.

__[GeoNames](https://www.geonames.org/)__

GeoNames has been around since 2002 and provides many useful datasets to help people make meaningful products. Particularly relevant to API Playground is their [postal code service](http://www.geonames.org/postal-codes/postal-codes-us.html), which enables this API to do semi-accurate location searching.

__[18F API Standards](https://github.com/18F/api-standards)__

The work of defining an API is difficult, and creating consistency within an organization is a large challenge. We really appreciate the work that the 18F has done to help set standards. In addition to the 18F, Microsoft also has a [great set of API guidelines](https://github.com/Microsoft/api-guidelines). Both of these sets are recommended readings for anyone creating or contributing to API development.

## Testing

Run `npm test` and all the tests in the `test/` directory will be executed. Our test suite uses a combination of the [Mocha JavaScript test framework](https://mochajs.org/) and [semistandard](https://github.com/Flet/semistandard) to ensure code quality and consistency.

## Help

If you have questions, encounter a bug or would like to submit a new feature, please [open an issue on GitHub](https://github.com/bestbuy/api-playground/issues).

## Credit

This application has been provided by [Best Buy's API team](https://developer.bestbuy.com/). If your company has a web or mobile application that talks about consumer electronics, please consider [signing up](https://developer.bestbuy.com/) for an API key and [integrating us](http://bestbuyapis.github.io/api-documentation/) into your application.

## Licenses

Copyright (c) 2016

* All source code is licensed under the [MIT license](LICENSE-SOURCE.md).
* Product, store and category information - stored within `dataset.sqlite` - is licensed under [Creative Commons Attribution-NonCommercial 4.0 International](LICENSE-DATASET.md).
* Location information within the dataset was made possible by [GeoNames](http://www.geonames.org) under the [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) license.
