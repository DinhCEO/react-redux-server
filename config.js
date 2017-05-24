module.exports = {
    services: [
        //service
        require('./lib/knex.provider'),
        require('./http/routers/routers.provider'),
        require('./http/express-server.provider'),
        require('./user.manager/users/user.repository.provider'),
        require('./jwt/jwt-service.provider'),
        require('./bcrypt/bcrypt.provider')
    ],
    port    : process.env['PORT'] || 8081,
    auth    : {
        privateKey: process.env['PRIVATE_KEY'] || 'xxx-xxx-xxx'
    },
    bcrypt  : {
        saltRounds: 10
    },
    cors    : {
        origin: "*"
    }
};