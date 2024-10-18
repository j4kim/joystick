const Handler = require("./Handler");

class ConsoleHandler extends Handler {
    code = [];
    cheatCode = ["up", "down", "up", "press"];

    constructor() {
        super();
        console.log("Cheat code to quit:", this.cheatCode);
    }

    handle(event) {
        console.log(event);

        this.code.push(event);
        this.code = this.code.slice(-this.cheatCode.length);
        if (this.code.toString() == this.cheatCode.toString()) {
            return this.switch();
        }
    }
}

module.exports = ConsoleHandler;
