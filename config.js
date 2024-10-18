const usrBase = "/Users/joaquimperez";

const options = [
    {
        handler: "DomAtHomeHandler",
        title: "Dom At Home",
        args: {
            path: usrBase + "/dev/dom-at-home/dist",
            port: 3000,
        },
    },
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
    {
        handler: "RetroArchHandler",
        title: "2048",
        args: { core: "2048_libretro.dylib" },
    },
    {
        handler: "RetroArchHandler",
        title: "Anarch (Doom)",
        args: { core: "anarch_libretro.dylib" },
    },
    {
        handler: "RetroArchHandler",
        title: "Gong",
        args: { core: "gong_libretro.dylib" },
    },
    {
        handler: "RetroArchHandler",
        title: "Cannonball (OutRun)",
        args: {
            core: "cannonball_libretro.dylib",
            rom: "CannonBall/CannonBall.game",
        },
    },
    {
        handler: "RetroArchHandler",
        title: "Cave Story",
        args: {
            core: "nxengine_libretro.dylib",
            rom: "/Cave Story (en)/Doukutsu.exe",
        },
    },
    {
        handler: "RetroArchHandler",
        title: "Doom",
        args: {
            core: "prboom_libretro.dylib",
            rom: "Doom/doom1.wad",
        },
    },
    {
        handler: "RetroArchHandler",
        title: "Space Invaders",
        args: {
            core: "stella_libretro.dylib",
            rom: "Atari 2600/Space Invaders.a26",
        },
    },
    
];

const retroarch = {
    coresPath: usrBase + "/Library/Application Support/RetroArch/cores",
    romsPath: "/Volumes/J4",
};

module.exports = { options, retroarch };
