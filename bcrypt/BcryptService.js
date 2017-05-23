class BcryptService {
    constructor(bcrypt) {
        this.bcrypt = bcrypt;
    }

    setRounds(rounds) {
        this.rounds = rounds;
        return this;
    }

    hashPassword(source) {
        return this.bcrypt.hash(source, this.rounds);
    }

    compare(source, hashed) {
        return this.bcrypt.compare(source, hashed);
    }
}
module.exports = BcryptService;