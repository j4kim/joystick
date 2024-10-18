class Handler {
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
        if (event === "longpress") {
            return this.switch();
        }
    }
}

module.exports = Handler;
