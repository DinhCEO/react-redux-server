const credentials    = require('../middlewares/credentials.middleware');
const AuthController = require('../../controllers/AuthController');

module.exports = function (router) {
    router.post('/login', credentials, AuthController.login);
};