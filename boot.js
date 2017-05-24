const knex                   = require('./lib/knex.provider');
const userRepositoryProvider = require('./user.manager/users/user.repository.provider');
const routerProvider         = require('./http/routers/routers.provider');
const jwtProvider            = require('./jwt/jwt-service.provider');
const bcryptProvider         = require('./bcrypt/bcrypt.provider');
const config                 = require('./config');
const lodash                 = require('lodash');

const Container = require('sphinx-container');
let container   = new Container();

module.exports = function () {
    container.singleton('config', function*() {
        return config;
    });

    config.services.map((provider) => {
        provider(container);
    });


    return container;
};