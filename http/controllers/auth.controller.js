module.exports.login = function (req, res, next) {
    const jwtService     = req.app.get('jwt');
    const bcryptService  = req.app.get('bcrypt');
    const userRepository = req.app.userRepository;

    let email    = req.body.email;
    let password = req.body.password;
    userRepository.login(email)
        .then(credentials => {
            if (!credentials[0]) {
                res.status(400).json({
                    code   : 'E_AUTH',
                    message: 'Incorrect email'
                });
            }
            return bcryptService.compare(password, credentials[0].password);
        })
        .then((result) => {
            if (!result) {
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
            try {
                let token = jwtService.encode(payload);
                return userRepository.saveToken(token, email)
                    .then(() => {
                        res.status(200).json({
                            token  : token,
                            profile: payload
                        });
                    })
                    .catch(error => {
                        next(error);
                    });
            } catch (ex) {
                next(ex);
            }
        })
        .catch(error => {
            next(error);
        });
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