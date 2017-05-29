/**
 * dang lam login(ret => credentials)
 * check password(ret => true/false)
 * encode(ret => token)
 * save token to database
 * success (ret => {profile:token,code:'SUCCESS',uuid:'....'})
 * @param req
 * @param res
 * @param next
 */
const AuthenticateError = require('./../../auth/error/authenticate-error');

module.exports.login = function*(req, res, next) {
    console.log('inside login');
    try {
        const container           = req.container;
        const jwtService          = yield container.make('jwtService');
        const bcryptHasher        = yield container.make('bcryptHasher');
        const userRepository      = yield container.make('userRepository');
        const authenticateService = yield container.make('authenticateService');

        let email    = req.body.email;
        let password = req.body.password;

        let credentials = yield authenticateService.login(email, password);
        let payload     = {
            email: email,
            role : 'customer',
            time : new Date()
        };
        let token       = jwtService.encode(payload);
        yield userRepository.saveToken(token, credentials[0].id);
        res.status(200).json({
            token  : token,
            profile: payload
        });

    } catch (ex) {
        if (ex instanceof AuthenticateError) {
            res.status(400).json({
                code   : 'E_AUTH',
                message: ex.message
            });
        }
        res.status(500).json({
            message: 'SERVER ERROR'
        });
    }
};

module.exports.signUp = function *(req, res, next) {
    try {
        const container      = req.container;
        const bcryptHasher   = yield container.make('bcryptHasher');
        const userRepository = yield container.make('userRepository');
        let hashPassword     = yield bcryptHasher.hashPassword(req.body.password);

        let profile = {
            email     : req.body.email,
            created_at: new Date(),
            fullname  : req.body.fullname,
            address   : req.body.address,
            phone     : req.body.phone
        };
        yield userRepository.signUp(profile, hashPassword);
        res.status(200).json({
            message: 'SignUp success'
        });
    } catch (error) {
        next(error);
    }
};