const UserController = require('../../controllers/UserController');

module.exports = function (router) {
    router.get('/users', UserController.getAll);
    router.get('/users/:id', UserController.getUserById);
    return router;
};
