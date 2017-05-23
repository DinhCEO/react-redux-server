module.exports = function (req, res, next) {
    const knex = req.app.get('knex');
    return knex('tbl_users').where('email', req.body.email)
        .then(result => {
            if (!result[0]) {
                return next();
            } else {
                return res.status(400).json({
                    code   : 'E_AUTH',
                    message: 'email already exists'
                });
            }
        })
        .catch((error) => {
            return next(error);
        })
};