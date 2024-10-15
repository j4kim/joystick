const VolumeHandler = require("./VolumeHandler");
const { execSync } = require("child_process");

class RaymanHandler extends VolumeHandler {
    constructor() {
        super();
        this.open();
    }

    switch() {
        this.killall();
        return "ConsoleHandler";
    }

    open() {
        const core = "/Users/joaquimperez/Library/Application Support/RetroArch/cores/mednafen_psx_libretro.dylib"
        const rom = "/Volumes/J4/PS1/Rayman-PSX-PAL/Rayman-PSX-PAL.cue"
        const cmd = `open -a "RetroArch" --args -L "${core}" "${rom}" -f`
        execSync(cmd);
        console.log(cmd)
    }
    killall() {
        try {
            execSync('killall "RetroArch"');
        } catch (e) {
            // no RetroArch processes to kill, do nothing
        }
    }
}

module.exports = RaymanHandler;
