exports.up = function (knex, Promise) {
    return knex.schema.table('tbl_users', function (table) {
        table.string('avatar');
        table.string('phone');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('tbl_users', function (table) {
        table.dropColumn('avatar');
        table.dropColumn('phone');
    })
};
