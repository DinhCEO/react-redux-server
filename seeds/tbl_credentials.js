exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('tbl_credentials').del()
        .then(function () {
            // Inserts seed entries
            return knex('tbl_credentials').insert([
                {
                    email   : 'pvd02091992@gmail.com',
                    password: '123456',
                    avatar  : '/image/avatar.dinhceo.jpg',
                    role    : 'customer'
                }
            ]);
        });
};
