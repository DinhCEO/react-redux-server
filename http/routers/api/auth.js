const AuthController = require('../../controllers/auth.controller');

const credentials  = require('../middlewares/credentials.middleware');
const userValidate = require('../middlewares/user-validate.middleware');
const emailExisted = require('../middlewares/email.unique.middleware');

module.exports = function (router) {
    router
        .post('/login', credentials, AuthController.login)
        .post('/signUp', userValidate, emailExisted, AuthController.signUp);
};