class Listener {

    static HANDLERS = {
        DefaultHandler: require("./DefaultHandler"),
        ConsoleHandler: require("./ConsoleHandler"),
    }

    constructor() {
        this.handler = new Listener.HANDLERS.DefaultHandler()
    }

    onData(key) {
        if (this.handler && typeof this.handler[key] === 'function') {
            const nextHandlerName = this.handler[key]();
            if (nextHandlerName) {
                console.log("Switching to", nextHandlerName)
                this.handler = new Listener.HANDLERS[nextHandlerName]();
            }
        }
    }
}

module.exports = Listener