const Handler = require("./Handler");
const { increaseVolume, decreaseVolume } = require("./volume");

class DefaultHandler extends Handler{
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