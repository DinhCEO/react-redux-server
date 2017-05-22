exports.up = function (knex, Promise) {
    return knex.schema.createTable('tbl_credentials', function (table) {
        table.increments();
        table.string('fb_id');
        table.string('email');
        table.string('password');
        table.string('avatar');
        table.string('type_account');
        table.string('token');
        table.string('role');
        table.string('user_id');
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tbl_credentials');
};
