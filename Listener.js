class Listener {
    static HANDLERS = {
        ConsoleHandler: require("./ConsoleHandler"),
        DomAtHomeHandler: require("./DomAtHomeHandler"),
    };

    constructor() {
        this.handler = new Listener.HANDLERS.ConsoleHandler();
    }

    onData(key) {
        if (typeof this.handler[key] === "function") {
            const nextHandlerName = this.handler[key]();
            if (nextHandlerName) {
                this.handler = new Listener.HANDLERS[nextHandlerName]();
            }
        } else {
            console.log(`No method ${key} in ${this.handler.constructor.name}`);
        }
    }
}

module.exports = Listener;
