const options = [
    { handler: "DomAtHomeHandler", title: "Dom At Home" },
    { handler: "ConsoleHandler", title: "Console" },
    { handler: "VolumeHandler", title: "Volume" },
    {
        handler: "RetroArchHandler",
        title: "Rayman",
        args: {
            core: "mednafen_psx_libretro.dylib",
            rom: "PS1/Rayman-PSX-PAL/Rayman-PSX-PAL.cue",
        },
    },
];

const retroarch = {
    coresPath:
        "/Users/joaquimperez/Library/Application Support/RetroArch/cores",
    romsPath: "/Volumes/J4",
};

module.exports = { options, retroarch };
