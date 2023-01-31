'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');
const { darkspark, darksparkVerify } = require("darkspark-expressjs-plug");


const app = feathers();
darkspark(app, "key");

app.configure(configuration(path.join(__dirname, '..')));

app.use(bodyParser.json({
  verify: darksparkVerify
}));

app.use(bodyParser.urlencoded({
  extended: true,
  verify: darksparkVerify
}));


app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join('public', 'favicon.ico')))
  .use('/', serveStatic('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

module.exports = app;
