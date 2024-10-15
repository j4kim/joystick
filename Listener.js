class Listener {

    static HANDLERS = {
        DefaultHandler: require("./DefaultHandler"),
        ConsoleHandler: require("./ConsoleHandler"),
    }

    constructor() {
        this.handler = new Listener.HANDLERS.DefaultHandler()
    }

    onData(key) {
        if (typeof this.handler[key] === 'function') {
            const nextHandlerName = this.handler[key]();
            if (nextHandlerName) {
                console.log("Switching to", nextHandlerName)
                this.handler = new Listener.HANDLERS[nextHandlerName]();
            }
        } else {
            console.error("No method", key, "in", this.handler.constructor.name)
        }
    }
}

module.exports = Listener