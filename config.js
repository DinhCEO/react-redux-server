module.exports = {
    services: [
        //service
        require('./lib/knex.provider'),
        require('./http/express-server.provider'),
        require('./http/routers/routers.provider'),
        require('./user.manager/users/user.repository.provider'),
        require('./jwt/jwt-service.provider'),
        require('./hasher/bcrypt.provider'),
        require('./auth/auth.provider')
    ],
    port    : process.env['PORT'] || 8081,
    auth    : {
        privateKey: process.env['PRIVATE_KEY'] || 'xxx-xxx-dinhceo'
    },
    bcrypt  : {
        saltRounds: 10
    },
    cors    : {
        origin: "*"
    }
};