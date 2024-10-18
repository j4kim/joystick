class Listener {
    static HANDLERS = {
        MenuHandler: require("./Handlers/MenuHandler"),
        SubMenuHandler: require("./Handlers/SubMenuHandler"),
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

        if (nextOption === undefined) return;

        const nextHandler = Listener.HANDLERS[nextOption?.handler];
        if (!nextHandler) {
            return console.error(`Handler not registered`, nextOption);
        }

        this.handler = new nextHandler(nextOption.args);
    }
}

module.exports = Listener;
