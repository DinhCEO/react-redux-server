/**
 * nhiệm vụ của auth.controller là nhận vào (email,password)
 * xác thực người dùng
 * success => payload
 * error =>
 * @param req
 * @param res
 * @param next
 * @return {token}
 */


module.exports.login = function*(req, res, next) {
    console.log('login');
    try {
        const container      = req.container;
        const jwtService     = yield container.make('jwtService');
        const hasher         = yield container.make('hasher');
        const userRepository = yield container.make('userRepository');
        let email            = req.body.email;
        let password         = req.body.password;

        let credentials = yield userRepository.login(email);
        if (!credentials[0]) {
            res.status(400).json({
                code   : 'E_AUTH',
                message: 'Incorrect email'
            });
        }
        let isPassword = yield hasher.compare(password, credentials[0].password);
        if (!isPassword) {
            res.status(400).json({
                code   : 'E_AUTH',
                message: 'Incorrect password'
            });
        }

        let payload = {
            email: email,
            role : 'customer',
            time : new Date()
        };
        let token   = jwtService.encode(payload);
        yield userRepository.saveToken(token, credentials[0].id);
        res.status(200).json({
            token  : token,
            profile: payload
        });

    } catch (error) {
        next(error);
    }
};

module.exports.signUp = function *(req, res, next) {
    try {
        const container      = req.container;
        const hasher         = yield container.make('hasher');
        const userRepository = yield container.make('userRepository');
    } catch (error) {

    }

    //
    //
    // bcryptService.hashPassword(req.body.password)
    //     .then(hash => {
    //         let profile = {
    //             email     : req.body.email,
    //             created_at: new Date(),
    //             fullname  : req.body.fullname || '',
    //             address   : req.body.address || '',
    //             phone     : req.body.phone || ''
    //         };
    //         return userRepository.signUp(profile, hash);
    //     })
    //     .then(() => {
    //         res.status(200).json({
    //             message: 'SignUp success'
    //         });
    //     })
    //     .catch((err) => {
    //         next(err);
    //     });
    yield next();
};