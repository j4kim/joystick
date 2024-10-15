class Listener {
    static HANDLERS = {
        ConsoleHandler: require("./Handlers/ConsoleHandler"),
        DomAtHomeHandler: require("./Handlers/DomAtHomeHandler"),
        VolumeHandler: require("./Handlers/VolumeHandler"),
        NumHandler: require("./Handlers/NumHandler"),
    };

    constructor() {
        this.handler = new Listener.HANDLERS.ConsoleHandler();
    }

    onData(key) {
        if (typeof this.handler[key] !== "function") {
            return console.error(`No method ${key} in ${this.handler.constructor.name}`);
        }
        const nextHandlerName = this.handler[key]();
        if (typeof nextHandlerName !== "string") {
            return;
        }
        const nextHandler = Listener.HANDLERS[nextHandlerName]
        if (!nextHandler) {
            return console.error(`Handler ${nextHandlerName} not registered`)
        }
        this.handler = new nextHandler();
    }
}

module.exports = Listener;
