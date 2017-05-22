const express    = require('express');
const app        = express();
const router     = express.Router();
const bodyParser = require('body-parser');
const apiRouter  = require('./http/routers/routers.provider');
const boot       = require('./boot');
boot(app);

app.use(bodyParser.json());


app.use('/api', apiRouter(router));

module.exports = app;