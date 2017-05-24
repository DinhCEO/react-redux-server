const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors');

module.exports = function (container) {
    container.singleton('http.kernel', function *() {
        const config = yield container.make('config');
        const router = yield container.make('http.router');

        app.use(bodyParser.json());
        app.use(cors(config.cors.origin));
        app.use(function (req, res, next) {
            req.container = container;
            next();
        });

        app.use('/api/', router);

        return app;
    })
};