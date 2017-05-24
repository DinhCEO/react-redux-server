const UserRepository = require('./UserRepository');
const Role           = require('../../constain/Role');

module.exports = function (container) {

    container.singleton('userRepository', function*() {
        const knex = yield container.make('knex');
        return new UserRepository(knex, Role);
    });
};