exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('tbl_credentials').del()
        .then(function () {
            // Inserts seed entries
            return knex('tbl_credentials').insert([
                {
                    email   : 'pvd02091992@gmail.com',
                    password: '$2a$10$tf/OoFvHUldgMgwrOAj7euLRLfyFtf9b6225CPspqRIVxu89WCmOK',
                    avatar  : '/image/avatar.dinhceo.jpg',
                    role    : 'GUEST'
                }
            ]);
        });
};
