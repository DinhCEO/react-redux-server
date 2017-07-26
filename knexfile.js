module.exports = {
    client    : 'pg',
    connection: {
        host    : 'ec2-107-21-113-16.compute-1.amazonaws.com',
        user    : 'flwmfwghisvryk',
        password: 'a9cb9a4075cbbdecaf7975e6ae1ba9705b6e3b8dc194f437730ef3f5ae7302d8',
        database: 'd1k0ave8lgra3h',
        port    : '5432',
        ssl     : true
    },
    pool      : {min: 0, max: 7}
};
