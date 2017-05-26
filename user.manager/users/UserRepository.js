class UserRepository {
    constructor(knex, role) {
        this.knex = knex;
        this.role = role;
    }

    *getUsers() {
        console.log('ruuun');
        return this.knex.select().table('tbl_users');
    }

    /**
     *
     * @returns {Promise}
     */

    *getAll() {
        return yield this.knex.select().table('tbl_users');
    }


    /**
     *
     * @param id
     * @return {Promise}
     */

    *getById(id) {
        return this.knex('tbl_users').where('id', id);
    }

    /**
     * @param email
     * @param password
     * @return {boolean}
     */
    *login(email) {
        let self = this;
        return self.knex('tbl_credentials').where('email', email);
    }

    *saveToken(token, credentialsId) {
        let self = this;
        return self.knex('tbl_credentials')
            .where('id', credentialsId)
            .update({token: token});
    }

    *signUp(profile, password) {
        let self = this;
        return self.knex.transaction((trx) => {
            return self.knex('tbl_users')
                .transacting(trx)
                .insert(profile)
                .then(users => {
                    return self.knex('tbl_credentials').insert({
                        email     : profile.email,
                        user_id   : users[0],
                        password  : password,
                        created_at: new Date(),
                        role      : this.role.getRole().guest
                    })
                })
                .then((result) => trx.commit)
                .catch((err) => {
                    trx.rollback;
                    throw Error(err);
                })
        });
    };
}

module.exports = UserRepository;