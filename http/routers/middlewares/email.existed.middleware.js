const Promise = require('bluebird');

module.exports = function*(req, res, next) {
    let container = req.container;
    const knex    = yield container.make('knex');
    let email     = req.body.email;

    let users       = yield knex.select().from('tbl_users').where('email', email);
    let credentials = yield knex.select().from('tbl_credentials').where('email', email);
    if (users.length || credentials.length) {
        return res.status(400).json({
            code   : 'E_AUTH',
            message: 'Email already exists'
        });
    }

    next();
};