const VolumeHandler = require("./VolumeHandler");
const { execSync } = require("child_process");

class DomAtHomeHandler extends VolumeHandler {
    constructor() {
        super();
        this.open("http://localhost:8080");
    }

    switch() {
        this.killall();
        return "ConsoleHandler";
    }

    open(url) {
        execSync(`open -a "Google Chrome" --args --kiosk "${url}"`);
    }
    killall() {
        try {
            execSync('killall "Google Chrome"');
        } catch (e) {
            // no Google Chrome processes to kill, do nothing
        }
    }
}

module.exports = DomAtHomeHandler;
