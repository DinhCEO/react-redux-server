require('dotenv').config();
const co   = require('co');
const boot = require('./boot');

co(function*() {
    const container = yield boot();

    const kernel = yield container.make('http.kernel');
    const config = yield container.make('config');

    kernel.listen(config.port, function () {
        console.log(`server listening port ${config.port}`);
    });
}).catch(error => {
    console.error(error);
});