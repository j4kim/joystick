class Handler {
    constructor() {
        console.clear();
        console.log(this.constructor.name);
    }

    switch() {
        return { handler: "MenuHandler" };
    }
}

module.exports = Handler;
