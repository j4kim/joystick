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
        execSync(
            `open -a "RetroArch" --args -L "${retroarch.coresPath}/${this.core}" "${retroarch.romsPath}/${this.rom}" -f`
        );
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
