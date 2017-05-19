const express = require('express');
const app     = express();
const knex    = require('./lib/knex');
const api     = require('./http/routers/api');
const boot    = require('./boot');
boot(app);


app.use('/api', api);

module.exports = app;