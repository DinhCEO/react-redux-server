require('dotenv').config();

const app    = require('./app');
const config = require('./config');

app.listen(config.port, function () {
    console.log(`server listening port ${config.port}`);
});