const express = require('express');
const app     = express();
const knex    = require('./lib/knex');
const api     = require('./http/routers/api');


app.use(function (req, res, next) {
    req.app.set('knex', knex);
    next();
});

app.use('/api', api);

module.exports = app;