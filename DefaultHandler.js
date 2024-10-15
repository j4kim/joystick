const { increaseVolume, decreaseVolume } = require("./volume");

class DefaultHandler {
    up() {
        increaseVolume();
    }
    down() {
        decreaseVolume();
    }
    enter() {
        return "ConsoleHandler";
    }
}

module.exports = DefaultHandler