const Validate = require('./Validate');

module.exports = function (req, res, next) {
    console.log(req.body);
    if (!req.body.email) {
        res.status(400).json({
            code   : 'E_AUTH',
            message: 'email is required'
        });
    }
    if (!Validate.email(req.body.email)) {
        res.status(400).json({
            code   : 'E_AUTH',
            message: 'email not valid'
        });
    }
    if (!req.body.password) {
        res.status(400).json({
            code   : 'E_AUTH',
            message: 'password is required'
        });
    }
    return next();
};