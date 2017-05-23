const bcrypt        = require('bcrypt');
const BcryptService = require('./BcryptService');
const config        = require('./../config');

module.exports = new BcryptService(bcrypt, config).setRounds(config.bcrypt.saltRounds);
