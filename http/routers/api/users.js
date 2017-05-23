const UserController = require('../../controllers/UserController');

module.exports = function (router) {
    router
        .get('/users', UserController.getAll)
        .get('/users/:id', UserController.getUserById);
};
