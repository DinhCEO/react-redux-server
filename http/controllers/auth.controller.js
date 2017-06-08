const DinhceoMessage                      = require('./../../message/dinhceo-message');
const {SUCCESS, SERVER_ERROR} = require('../../message/message-code');

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
            role : credentials[0].role,
            time : new Date()
        };
        let token       = jwtService.encode(payload);
        yield userRepository.saveToken(token, credentials[0].id);
        return res.status(200).json({
            code   : SUCCESS,
            token  : token,
            profile: payload
        });

    } catch (ex) {
        if (ex instanceof DinhceoMessage) {
            return res.status(404).json(ex.toJson());
        }
        return res.status(500).json({
            message: SERVER_ERROR
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
        return res.status(200).json({
            message: SUCCESS
        });

    } catch (error) {
        next(error);
    }
};