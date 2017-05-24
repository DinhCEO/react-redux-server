class JwtService {
    constructor(jwt) {
        this.jwt = jwt;
    }

    setPrivateKey(privateKey) {
        this.privateKey = privateKey;
        return this;
    }

    encode(payload) {
        return this.jwt.encode(payload, this.privateKey);
    }

    decode(token) {
        return this.jwt.decode(token, this.privateKey);
    }
}

module.exports = JwtService;