const apiUsers = require('./api/users');
const apiAuth  = require('./api/auth');


module.exports = function (container) {
    container.singleton('http.router', function*() {
        const app  = yield container.make('http.kernel');
        let router = app.Router();

        apiUsers(router);
        apiAuth(router);

        return router;
    });
};