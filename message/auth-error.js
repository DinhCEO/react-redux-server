const {ERROR_AUTH_CODE} = require('./message-code');
const DinhceoMessage    = require('./dinhceo-message');

class AuthMessage extends DinhceoMessage {
    constructor(message) {
        super();
        this.message = message;
    }

    toJson() {
        return {
            code   : ERROR_AUTH_CODE,
            message: this.message
        }
    }
}

module.exports = AuthMessage;