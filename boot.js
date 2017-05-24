const config = require('./config');
// const lodash                 = require('lodash');

const Container = require('sphinx-container');
let container   = new Container();

module.exports = function*() {
    container.singleton('config', function*() {
        return config;
    });

    for (let index = 0; config.services.length; index++) {
        yield config.services[index](container);
    }

    return container;
};