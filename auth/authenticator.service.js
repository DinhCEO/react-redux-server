const AuthenticateError = require('./error/authenticate-error');
const Credential        = require('./credential');

class AuthenticateService {
    constructor(hasher, credentialsProvider) {
        this.hasher              = hasher;
        this.credentialsProvider = credentialsProvider;
    }

    *login(email, password) {
        let foundCredentials = yield this.credentialsProvider.provide(email);
        if (!foundCredentials) {
            throw new AuthenticateError('E_AUTH : User is not existed');
        }

        let foundPassword = yield this.hasher.compare(password, foundCredentials.password);
        if (!foundPassword) {
            throw new AuthenticateError('E_AUTH : Password mismatch');
        }

        return new Credential({

        }, new Date())
    }
}

module.exports = AuthenticateService;