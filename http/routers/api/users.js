const UserController = require('../../controllers/user.controller');

module.exports = function (router) {
    router
        .get('/users', UserController.getAll)
        .get('/users/:id', UserController.getUserById);
};
