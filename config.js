module.exports = {
    port  : process.env['PORT'] || 8081,
    auth  : {
        privateKey: process.env['PRIVATE_KEY'] || 'xxx-xxx-xxx'
    },
    bcrypt: {
        saltRounds: 10
    }
};