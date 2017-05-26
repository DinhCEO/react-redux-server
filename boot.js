const config    = require('./config');
const Container = require('sphinx-container');
let container   = new Container();

module.exports = function*() {
    container.singleton('config', function*() {
        return config;
    });

    for (let i = 0; i < config.services.length; i++) {
        config.services[i](container);
    }

    return container;
};