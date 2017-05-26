class Authorizer {
    constructor(jwt) {
        this.jwt = jwt;
    }

    sign(payload) {
        return this.jwt.encode(payload);
    }

    check(token) {
        return this.jwt.decode(token);
    }
}
module.exports = Authorizer;