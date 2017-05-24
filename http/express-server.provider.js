const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors');

module.exports = function (container) {
    container.singleton('http.kernel', function *() {
        const config = yield container.make('config');

        app.use(bodyParser.json());
        app.use(cors(config.cors.origin));
        app.use(function (req, res, next) {
            req.container = container;
            next();
        });

        return app;
    })
};