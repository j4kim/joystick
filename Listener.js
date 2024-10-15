const DefaultHandler = require("./DefaultHandler")

class Listener {

    constructor() {
        this.handler = new DefaultHandler()
    }

    onData(key) {
        if (this.handler && typeof this.handler[key] === 'function') {
            this.handler[key]()
        }
    }
}

module.exports = Listener