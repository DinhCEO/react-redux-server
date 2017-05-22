exports.up = function (knex, Promise) {
    return knex.schema.createTable('tbl_users', function (table) {
        table.increments();
        table.string('fullname');
        table.string('email');
        table.string('address');
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tbl_users');
};
