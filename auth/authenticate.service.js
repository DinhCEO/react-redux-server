const AuthenticationError = require('../message/auth-error');

class AuthenticateService {
    constructor(knex, bcryptHasher) {
        this.knex         = knex;
        this.bcryptHasher = bcryptHasher;
    }

    *login(email, password) {
        let credentials = yield this.knex
            .select()
            .from('tbl_credentials')
            .where('email', email);
        if (!credentials.length) {
            throw new AuthenticationError('User not exist');
        }
        if (!this.bcryptHasher.compare(password, credentials.password)) {
            throw new AuthenticationError('Incorrect password');
        }
        return credentials;
    }

}

module.exports = AuthenticateService;