const knex                   = require('./lib/knex');
const userRepositoryProvider = require('./user.manager/users/user.repository.provider');
const routerProvider         = require('./http/routers/routers.provider');
const jwtProvider            = require('./jwt/jwt-service.provider');
const bcryptProvider         = require('./bcrypt/bcrypt.provider');

module.exports = function (app) {
    app.set('knex', knex);
    app.set('jwt', jwtProvider);
    app.set('bcrypt', bcryptProvider);
    userRepositoryProvider(app);
    routerProvider(app);
    return app;
};