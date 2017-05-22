module.exports = function (req, res, next) {
    if (!req.body.email) {
        res.status(400).json({
            code   : 'E_INVALID',
            message: 'email is required'
        });
    }
    if (!req.body.password) {
        res.status(400).json({
            code   : 'E_INVALID',
            message: 'password is required'
        });
    }
    return next();
};