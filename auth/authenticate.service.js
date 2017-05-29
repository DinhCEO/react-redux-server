const AuthenticateError = require('./error/authenticate-error');

class AuthenticateService {
    constructor(knex, bcryptHasher) {
        this.knex         = knex;
        this.bcryptHasher = bcryptHasher;
    }

    *login(email, password) {
        let credentials = yield this.knex()
            .select()
            .from('tbl_credentials')
            .where('email', email);
        if (!credentials.length) {
            throw new AuthenticateService('User not existed');
        }
        if (!this.bcryptHasher.compare(password, credentials.password)) {
            throw new AuthenticateService('Incorrect password');
        }
        return credentials;
    }

}

module.exports = AuthenticateService;