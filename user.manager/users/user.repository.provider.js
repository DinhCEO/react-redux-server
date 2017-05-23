const UserRepository = require('./UserRepository');
const Role           = require('../../constain/Role');

module.exports = function (app) {
    let knex           = app.get('knex');
    app.userRepository = new UserRepository(knex, Role);
    return app;
};