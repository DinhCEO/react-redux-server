exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('tbl_users').del()
        .then(function () {
            // Inserts seed entries
            return knex('tbl_users').insert([
                {fullname: 'dinhceo1', email: 'pvd02091992@gmail.com', address: 'ha noi'},
                {fullname: 'dinhceo2', email: 'pvd02091993@gmail.com', address: 'ha noi2'},
                {fullname: 'dinhceo3', email: 'pvd02091994@gmail.com', address: 'ha noi3'},
            ]);
        });
};
