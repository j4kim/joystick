const Handler = require("./Handler");
const { increaseVolume, decreaseVolume } = require("./volume");

class VolumeHandler extends Handler {
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

module.exports = VolumeHandler;
