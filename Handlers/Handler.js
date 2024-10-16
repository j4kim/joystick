class Handler {
    constructor() {
        console.clear();
        console.log(this.constructor.name);
    }

    switch() {
        return { handler: "ConsoleHandler" };
    }
}

module.exports = Handler;
