class BcryptService {
    constructor(bcrypt, config) {
        this.config = config;
        this.bcrypt = bcrypt;
    }

    hash(resources) {
        return new Promise((resolve, reject) => {
            this.bcrypt.hash(resources, this.config.bcrypt.saltRounds)
                .then((hash) => {
                    resolve(hash);
                })
                .catch((error) => {
                    reject(error);
                })

        })
    }

    compare(input, resource) {
        return new Promise((resolve, reject) => {
            this.bcrypt.compare(input, resource)
                .then((result) => {
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}
module.exports = BcryptService;