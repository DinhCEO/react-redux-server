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
        res.status(400).json({
            code   : 'E_LOGIN',
            message: ex.message
        });
    }
};

module.exports.signUp = function (req, res, next) {
    let bcryptService  = req.app.get('bcrypt');
    let userRepository = req.app.userRepository;


    bcryptService.hashPassword(req.body.password)
        .then(hash => {
            let profile = {
                email     : req.body.email,
                created_at: new Date(),
                fullname  : req.body.fullname || '',
                address   : req.body.address || '',
                phone     : req.body.phone || ''
            };
            return userRepository.signUp(profile, hash);
        })
        .then(() => {
            res.status(200).json({
                message: 'SignUp success'
            });
        })
        .catch((err) => {
            next(err);
        });
};