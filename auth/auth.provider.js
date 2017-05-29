const AuthenticateService = require('./authenticate.service');

module.exports = function (container) {
    container.singleton('authenticateService', function*() {
        let knex         = yield container.make('knex');
        let bcryptHasher = yield container.make('bcryptHasher');

        return new AuthenticateService(knex, bcryptHasher);
    })
};