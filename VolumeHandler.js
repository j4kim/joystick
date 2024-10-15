const Handler = require("./Handler");
const { execSync } = require("child_process");

class VolumeHandler extends Handler {
    level = 0;
    step = 6;

    constructor() {
        super();
        this.level = this.getLevel();
    }

    up() {
        this.setLevel(this.level + this.step);
    }
    down() {
        this.setLevel(this.level - this.step);
    }
    switch() {
        return "ConsoleHandler";
    }

    getLevel() {
        const stdout = execSync(
            'osascript -e "output volume of (get volume settings)"'
        );
        return parseInt(stdout.toString().trim());
    }
    setLevel(level) {
        if (level < 0) level = 0;
        if (level > 100) level = 100;
        this.level = level;
        return execSync(
            `osascript -e "set volume output volume ${this.level}"`
        );
    }
}

module.exports = VolumeHandler;
