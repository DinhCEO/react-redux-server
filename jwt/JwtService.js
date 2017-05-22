class JwtService {
    constructor(jwt, config) {
        this.config = config;
        this.jwt    = jwt;
    }

    encode(payload) {
        return this.jwt.encode(payload, this.config.auth.privateKey);
    }

    decode(token) {
        return this.jwt.decode(token, this.config.auth.privateKey);
    }
}

module.exports = JwtService;