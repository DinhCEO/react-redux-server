const knexConfig = require('../knexfile');
const knex       = require('knex')(knexConfig);

module.exports = function (container) {
    container.singleton('knex', function*() {
        return knex;
    })
};