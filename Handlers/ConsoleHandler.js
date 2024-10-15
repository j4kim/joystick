const Handler = require("./Handler");

class ConsoleHandler extends Handler {
    up() {
        console.log("up");
    }
    down() {
        console.log("down");
    }
    switch() {
        return "DomAtHomeHandler";
    }
}

module.exports = ConsoleHandler;
