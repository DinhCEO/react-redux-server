const apiUsers = require('./api/users');
const apiAuth  = require('./api/auth');


module.exports = function (router) {
    apiUsers(router);
    apiAuth(router);
    return router;
};