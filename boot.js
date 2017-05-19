const knex                   = require('./lib/knex');
const userRepositoryProvider = require('./user.manager/users/user.repository.provider');

module.exports = function (app) {
    app.set('knex', knex);
    userRepositoryProvider(app);
    return app;
};