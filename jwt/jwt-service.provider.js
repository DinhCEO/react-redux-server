const jwt        = require('jwt-simple');
const JwtService = require('./JwtService');
const config     = require('../config');

module.exports = new JwtService(jwt, config);