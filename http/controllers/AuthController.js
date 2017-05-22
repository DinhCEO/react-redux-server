module.exports.login = function (req, res) {
    const jwtService = req.app.get('jwt');
    //todo check database
    let payload      = {
        email: req.body.email,
        role : 'customer',
        time : new Date()
    };
    try {
        let token = jwtService.encode(payload);
        res.status(200).json({
            token  : token,
            profile: payload
        });
    } catch (ex) {
        res.status(500).json({
            code   : 'E_SERVER',
            message: ex.message
        });
    }
};

module.exports.signUp = function (req, res) {
    const bcryptService = req.app.get('bcrypt');
};