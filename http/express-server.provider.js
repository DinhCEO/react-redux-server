const app        = require('express')();
const bodyParser = require('body-parser');
const cors       = require('cors');


module.exports = function (container) {
    container.singleton('http.kernel', function *() {
        const config         = yield container.make('config');
        const router         = yield container.make('http.router');
        const userRepository = yield container.make('userRepository');

        app.use(bodyParser.json());
        app.use(cors(config.cors.origin));
        app.use(function (req, res, next) {
            console.log('gim container');
            req.container = container;
            next();
        });

        app.use('/api', router);

        return app;
    })
};