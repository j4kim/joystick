const { increaseVolume, decreaseVolume } = require("./volume");

class DefaultHandler {
    up() {
        increaseVolume();
    }
    down() {
        decreaseVolume();
    }
    switch() {
        return "ConsoleHandler";
    }
}

module.exports = DefaultHandler