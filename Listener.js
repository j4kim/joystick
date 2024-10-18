class Listener {
    static HANDLERS = {
        MenuHandler: require("./Handlers/MenuHandler"),
        ConsoleHandler: require("./Handlers/ConsoleHandler"),
        DomAtHomeHandler: require("./Handlers/DomAtHomeHandler"),
        VolumeHandler: require("./Handlers/VolumeHandler"),
        RetroArchHandler: require("./Handlers/RetroArchHandler"),
    };

    constructor() {
        this.handler = new Listener.HANDLERS.MenuHandler();
    }

    onData(event) {
        const nextOption = this.handler.handle(event);
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
