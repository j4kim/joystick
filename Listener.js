class Listener {
    static HANDLERS = {
        ConsoleHandler: require("./Handlers/ConsoleHandler"),
        DomAtHomeHandler: require("./Handlers/DomAtHomeHandler"),
    };

    constructor() {
        this.handler = new Listener.HANDLERS.ConsoleHandler();
    }

    onData(key) {
        if (typeof this.handler[key] === "function") {
            const nextHandlerName = this.handler[key]();
            if (typeof nextHandlerName === "string") {
                const nextHandler = Listener.HANDLERS[nextHandlerName]
                if (nextHandler) {
                    this.handler = new nextHandler();
                } else {
                    console.error(`Handler ${nextHandlerName} not registered`)
                }
            }
        } else {
            console.error(`No method ${key} in ${this.handler.constructor.name}`);
        }
    }
}

module.exports = Listener;
