const VolumeHandler = require("./VolumeHandler");
const { execSync } = require("child_process");
const { retroarch } = require("../config");
const { checkPath } = require("../tools");

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
        var rom = "";
        if (this.rom) {
            rom = retroarch.romsPath + "/" + this.rom;
            if (!checkPath(rom)) return;
        }
        const core = retroarch.coresPath + "/" + this.core;
        if (!checkPath(core)) return;
        const cmd = `open -a "RetroArch" --args -L "${core}" "${rom}" -f`;
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
