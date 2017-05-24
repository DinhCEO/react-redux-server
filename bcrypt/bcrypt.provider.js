const bcrypt        = require('bcrypt');
const BcryptService = require('./BcryptService');


module.exports = function (container) {
    container.singleton('bcrypt', function*() {
        const config = yield container.make('config');
        return new BcryptService(bcrypt).setRounds(config.bcrypt.saltRounds);
    })
};

