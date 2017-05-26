class DbCredentialsProvider {
    constructor(knex) {
        this.knex = knex;
    }

    *provide(email) {
        let credentials = yield this.knex
            .select()
            .from('tbl_credentials')
            .where('email', email);

        return credentials.length ? credentials[0] : null
    }
}

module.exports = DbCredentialsProvider;