class Listener {
    static HANDLERS = {
        ConsoleHandler: require("./Handlers/ConsoleHandler"),
        DomAtHomeHandler: require("./Handlers/DomAtHomeHandler"),
        VolumeHandler: require("./Handlers/VolumeHandler"),
        NumHandler: require("./Handlers/NumHandler"),
        RetroArchHandler: require("./Handlers/RetroArchHandler"),
    };

    constructor() {
        this.handler = new Listener.HANDLERS.ConsoleHandler();
    }

    onData(key) {
        if (typeof this.handler[key] !== "function") {
            return console.error(
                `No method ${key} in ${this.handler.constructor.name}`
            );
        }
        const nextOption = this.handler[key]();
        if (nextOption === undefined) {
            return;
        }
        if (!nextOption.handler) {
            return console.error(
                `No handler returned by ${this.handler.constructor.name}`
            );
        }
        const nextHandler = Listener.HANDLERS[nextOption.handler];
        if (!nextHandler) {
            return console.error(
                `Handler ${nextOption.handler} not registered`
            );
        }
        this.handler = new nextHandler(nextOption.args);
    }
}

module.exports = Listener;
