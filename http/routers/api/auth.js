const co = require('co');

const AuthController    = require('../../controllers/auth.controller');
const co_authController = require('../../controllers/co.auth.controller');

const credentials  = require('../middlewares/credentials.middleware');
const userValidate = require('../middlewares/user-validate.middleware');
const emailExisted = require('../middlewares/email.unique.middleware');

module.exports = function (router) {
    router
        .post('/login', credentials, co(co_authController.login))
        .post('/signUp', userValidate, emailExisted, AuthController.signUp);
};