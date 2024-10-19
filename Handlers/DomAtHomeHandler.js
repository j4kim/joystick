const Joystick = require("../joystick");
const VolumeHandler = require("./VolumeHandler");
const { exec, execSync } = require("child_process");

module.exports = class DomAtHomeHandler extends VolumeHandler {
    constructor({ path, port }) {
        super();
        this.joystick = new Joystick();
        this.serveProcess = this.serve(path, port);
        this.openChrome("http://localhost:" + port);
    }

    switch() {
        this.serveProcess.kill();
        this.joystick.disconnect();
        this.killChrome();
        return super.switch();
    }

    serve(path, port) {
        return exec(`npx serve ${path} -l ${port}`);
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
