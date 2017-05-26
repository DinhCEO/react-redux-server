const Router = require('express').Router;

const apiUsers = require('./api/users');
const apiAuth  = require('./api/auth');


module.exports = function (container) {
    container.singleton('http.router', function*() {
        let router = new Router();
        apiAuth(router);
        apiUsers(router);

        return router;
    });
};