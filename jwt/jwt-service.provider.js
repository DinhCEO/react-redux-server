const jwt        = require('jwt-simple');
const JwtService = require('./JwtService');

module.exports = function (container) {
    container.singleton('jwtService', function*() {
        const config = yield container.make('config');
        return new JwtService(jwt).setPrivateKey(config.auth.privateKey);
    })
};