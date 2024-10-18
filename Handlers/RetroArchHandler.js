const VolumeHandler = require("./VolumeHandler");
const { execSync } = require("child_process");
const { retroarch } = require("../config");

class RetroArchHandler extends VolumeHandler {
    constructor({ core, rom }) {
        super();
        this.core = core;
        this.rom = rom;
        this.openRetroArch();
    }

    switch() {
        this.killRetroArch();
        return super.switch();
    }

    openRetroArch() {
        const rom = this.rom ? `"${retroarch.romsPath}/${this.rom}"` : "";
        const cmd = `open -a "RetroArch" --args -L "${retroarch.coresPath}/${this.core}" ${rom} -f`;
        console.log(cmd);
        execSync(cmd);
    }
    killRetroArch() {
        try {
            execSync('killall "RetroArch"');
        } catch (e) {
            // no RetroArch processes to kill, do nothing
        }
    }
}

module.exports = RetroArchHandler;
