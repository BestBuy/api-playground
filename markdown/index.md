# Best Buy - API Playground

## Overview

The Best Buy API Playground is a dataset of products, categories, and stores exposed over HTTP via a simple REST API. This application is meant to be a tool used for educational purposes.

### Endpoints

* [/products](/products) - a subset of ~50,000 products available at Best Buy.
* [/categories](/categories) - All product categories and their subcategories/path.
* [/stores](/stores) - A list of all Best Buy store locations.
* [/services](/services) - A list of all services available at Best Buy stores.
* [/version](/version) - Displays the current version of the application.
* [/healthcheck](/healthcheck) - Displays the information about the application's health.

## Exploring the API

### Swagger
* Swagger config URL: [/swagger.json](/swagger.json)
* Explore the API via the [Swagger UI](/docs)

### Postman Collection
The API can also be explored via a [Postman Collection](https://www.getpostman.com/docs/collections).
* Import the collection from this URL: [/postman/API.postman_collection.json](/postman/API.postman_collection.json)

### Querying the API
* Check out our [Example Queries](queries) to get an idea of whats possible.
* All querystrings on GET requests are parsed using [qs](http://npmjs.com/packages/qs) to turn them into JSON.
* Nearly all the [Sequelize Operators](http://docs.sequelizejs.com/en/latest/docs/querying/#operators) are supported.
  * Use `*` instead of `%` for the `$like` Operators
  * Use `$select` instead of `$attributes` for selecting specific fields
  * Use Feathers [Pagination and sorting](https://docs.feathersjs.com/databases/pagination.html) fields (`$limit, $skip, $sort`)

### Technologies

* [Feathers](http://feathersjs.com/)
* [Sequelize](http://docs.sequelizejs.com/en/v3/)

### Attribution
* Zipcode data provided by [geonames.org](http://www.geonames.org/)
* CSS provided by [Skeleton](http://getskeleton.com/)