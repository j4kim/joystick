class Handler {
    eventToSwitch = "longpress"

    constructor() {
        console.clear();
        console.log(this.constructor.name);
    }

    switch() {
        return { handler: "MenuHandler" };
    }

    handle(event) {
        if (typeof this[event] === "function") {
            return this[event]();
        }
        if (event === this.eventToSwitch) {
            return this.switch();
        }
    }
}

module.exports = Handler;
