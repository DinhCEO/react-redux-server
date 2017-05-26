const authController = require('../../controllers/auth.controller');

const credentialsValidator = require('../middlewares/credentials-validator.middleware');
const userValidator        = require('../middlewares/user-validate.middleware');
const emailExisted         = require('../middlewares/email.existed.middleware');
const w                    = require('co-express');

module.exports = function (router) {
    router
        .post('/login', credentialsValidator, w(authController.login))
        .post('/signUp', userValidator, emailExisted, w(authController.signUp));
};