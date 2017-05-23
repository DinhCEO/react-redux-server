exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('tbl_users').del()
        .then(function () {
            // Inserts seed entries
            return knex('tbl_users').insert([
                {
                    fullname  : 'dinhceo',
                    email     : 'pvd02091992@gmail.com',
                    address   : 'ha noi',
                    created_at: new Date()
                },
            ]);
        });
};
