class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }

    /**
     *
     * @returns {Promise}
     */

    getAll() {
        return this.knex.select().table('tbl_users');
    }


    /**
     *
     * @param id
     * @return {Promise}
     */

    getById(id) {
        return this.knex('tbl_users').where('id', id);
    }

    /**
     * @param email
     * @param password
     * @return {boolean}
     */
    login(email, password) {

    }

    signUp(credentials) {
        let user = {

        }
    }
}

module.exports = UserRepository;