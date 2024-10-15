const { increaseVolume, decreaseVolume } = require("./volume");

class DefaultHandler {
    up() {
        increaseVolume();
    }
    down() {
        decreaseVolume();
    }
}

module.exports = DefaultHandler