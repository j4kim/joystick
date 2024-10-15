class Listener {
    static HANDLERS = {
        VolumeHandler: require("./VolumeHandler"),
        ConsoleHandler: require("./ConsoleHandler"),
    };

    constructor() {
        this.handler = new Listener.HANDLERS.VolumeHandler();
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
