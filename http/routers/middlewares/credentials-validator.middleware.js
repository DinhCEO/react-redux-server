const Validate = require('./Validate');

module.exports = function (req, res, next) {
    if (!req.body.email) {
        res.status(400).json({
            code   : 'E_INVALID',
            message: 'Email is required'
        });
    }
    if (!Validate.email(req.body.email)) {
        res.status(400).json({
            code   : 'E_INVALID',
            message: 'Email not valid'
        });
    }
    if (!req.body.password) {
        res.status(400).json({
            code   : 'E_INVALID',
            message: 'Password is required'
        });
    }
    return next();
};