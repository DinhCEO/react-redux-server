const Promise = require('bluebird');

let checkTblUser        = (knex, email) => {
    return knex('tbl_users').where('email', email);
};
let checkTblCredentials = (knex, email) => {
    return knex('tbl_credentials').where('email', email);
};

module.exports = function (req, res, next) {
    const knex = req.app.get('knex');
    return Promise.all([checkTblUser(knex, req.body.email), checkTblCredentials(knex, req.body.email)])
        .spread((result1, result2) => {
            if (!result1[0] && !result2[0]) {
                return next();
            } else {
                return res.status(400).json({
                    code   : 'E_AUTH',
                    message: 'Email already exists'
                });
            }
        })
        .catch((error) => {
            next(error);
        });
};