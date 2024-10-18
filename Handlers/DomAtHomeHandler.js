const Joystick = require("../joystick");
const VolumeHandler = require("./VolumeHandler");
const { execSync } = require("child_process");

class DomAtHomeHandler extends VolumeHandler {
    constructor() {
        super();
        this.joystick = new Joystick();
        this.openChrome("http://localhost:8080");
    }

    switch() {
        this.joystick.disconnect();
        this.killChrome();
        return super.switch();
    }

    openChrome(url) {
        execSync(`open -a "Google Chrome" --args --kiosk "${url}"`);
    }
    killChrome() {
        try {
            execSync('killall "Google Chrome"');
        } catch (e) {
            // no Google Chrome processes to kill, do nothing
        }
    }
}

module.exports = DomAtHomeHandler;
