class DinhceoMessage {
    constructor() {

    }

    toJson() {
        return {
            code   : 'DINHCEO_ERROR',
            message: 'ERROR'
        }
    }
}

module.exports = DinhceoMessage;