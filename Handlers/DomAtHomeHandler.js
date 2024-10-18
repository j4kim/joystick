const Joystick = require("../joystick");
const VolumeHandler = require("./VolumeHandler");
const { execSync } = require("child_process");
const handler = require("serve-handler");
const http = require("http");

class DomAtHomeHandler extends VolumeHandler {
    constructor({ path, port }) {
        super();
        this.joystick = new Joystick();
        this.server = this.serve(path, port);
        this.openChrome("http://localhost:" + port);
    }

    switch() {
        this.server.close();
        this.joystick.disconnect();
        this.killChrome();
        return super.switch();
    }

    serve(path, port) {
        const server = http.createServer((request, response) =>
            handler(request, response, { public: path })
        );
        server.listen(port);
        return server;
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
