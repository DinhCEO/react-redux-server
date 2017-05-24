const co             = require('co');
const express        = require('express');
const app            = express();
const knex           = require('./lib/knex');
const UserRepository = require('./user.manager/users/UserRepository');
let userRepository   = new UserRepository(knex, null);


app.get('/all', function (req, res) {
    co(function*() {
        let users = yield userRepository.getAll();
        res.status(200).json({
            users: users
        });
    }).catch(error => {
        res.status(400).json({
            error: error
        });
    })

});


app.listen(3000, function () {
    console.log('server running port 3000');
});

