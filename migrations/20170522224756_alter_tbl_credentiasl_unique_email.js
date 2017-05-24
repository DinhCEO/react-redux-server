exports.up = function (knex, Promise) {
    return knex.schema.alterTable('tbl_credentials', function (t) {
        t.unique('email');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('tbl_credentials', function (t) {
        t.dropUnique('email');
    })
};
