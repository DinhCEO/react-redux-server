const UserRepository = require('./UserRepository');

module.exports = function (app) {
    let knex           = app.get('knex');
    app.userRepository = new UserRepository(knex);
    return app;
};