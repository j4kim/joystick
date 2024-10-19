const options = [
    {
        handler: "DomAtHomeHandler",
        title: "Dom At Home",
        args: {
            path: "$HOME/dom-at-home/dist",
            port: 3000,
        },
    },

    {
        handler: "SubMenuHandler",
        title: "PS1",
        args: [
            {
                handler: "RetroArchHandler",
                title: "Crash Bandicoot",
                args: {
                    core: "mednafen_psx_libretro.dylib",
                    rom: "PS1/Crash Bandicoot/Crash Bandicoot [NTSC-U] [SCUS-94900].cue",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Destruction Derby",
                args: {
                    core: "mednafen_psx_libretro.dylib",
                    rom: "PS1/Destruction Derby.PBP",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Gran Turismo",
                args: {
                    core: "mednafen_psx_libretro.dylib",
                    rom: "PS1/Gran Turismo [EUROPE] (En-Fr-Al-It-Es).PBP",
                },
            },
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
                title: "Resident Evil",
                args: {
                    core: "mednafen_psx_libretro.dylib",
                    rom: "PS1/Resident Evil-Director's Cut-PSX-PAL-FR/Resident Evil Director Cut.cue",
                },
            },
        ],
    },

    {
        handler: "SubMenuHandler",
        title: "Nintendo",
        args: [
            {
                handler: "RetroArchHandler",
                title: "Puzzle Bobble",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Balloon Fight (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Bubble Bobble",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Bubble Bobble (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Burger Time",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Burger Time (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Donkey Kong",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Donkey Kong (World) (Rev A).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Donkey Kong Jr.",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Donkey Kong Jr. (World) (Rev A).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Dr. Mario",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Dr. Mario (Japan, USA) (Rev A).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Dudes With Attitude",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Dudes With Attitude (USA) (Unl).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Mega Man",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Mega Man (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Mega Man 2",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Mega Man 2 (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Metroid",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Metroid (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Pac-Man",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Pac-Man (USA) (Namco).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Super Mario Bros.",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Super Mario Bros. (World).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Super Mario Bros. 2",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Super Mario Bros. 2 (USA) (Rev A).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Super Mario Bros. 3",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Super Mario Bros. 3 (USA) (Rev A).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Tetris",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Tetris (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Tetris 2",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Tetris 2 (USA).nes",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Wheel of Fortune - Junior Edition",
                args: {
                    core: "fceumm_libretro.dylib",
                    rom: "NES/Wheel of Fortune - Junior Edition (USA).nes",
                },
            },
        ],
    },

    {
        handler: "SubMenuHandler",
        title: "Super Nintendo",
        args: [
            {
                handler: "RetroArchHandler",
                title: "Puzzle Bobble",
                args: {
                    core: "bsnes_libretro.dylib",
                    rom: "SNES/Puzzle Bobble (E).smc",
                },
            },
        ],
    },

    {
        handler: "SubMenuHandler",
        title: "Nintendo 64",
        args: [
            {
                handler: "RetroArchHandler",
                title: "007 - GoldenEye",
                args: {
                    core: "mupen64plus_next_libretro.dylib",
                    rom: "Nintendo 64/007 - GoldenEye (Europe).z64",
                },
            },
        ],
    },


    {
        handler: "SubMenuHandler",
        title: "Game Boy Advance",
        args: [
            {
                handler: "RetroArchHandler",
                title: "Super Mario Bros.",
                args: {
                    core: "mgba_libretro.dylib",
                    rom: "GBA/Classic NES Series - Super Mario Bros. (USA, Europe).gba",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Donkey Kong Jr.",
                args: {
                    core: "mgba_libretro.dylib",
                    rom: "GBA/Donkey Kong Jr. (USA) (Advance Play Edition).gba",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Pinball Challenge Deluxe",
                args: {
                    core: "mgba_libretro.dylib",
                    rom: "GBA/Pinball Challenge Deluxe (Europe).gba",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Super Mario Advance",
                args: {
                    core: "mgba_libretro.dylib",
                    rom: "GBA/Super Mario Advance (USA, Europe).gba",
                },
            },
            {
                handler: "RetroArchHandler",
                title: "Tetris Worlds",
                args: {
                    core: "mgba_libretro.dylib",
                    rom: "GBA/Tetris Worlds (Europe) (En,Fr,De,Nl).gba",
                },
            },
        ],
    },

    {
        handler: "SubMenuHandler",
        title: "Atari 2600",
        args: [
            {
                handler: "RetroArchHandler",
                title: "Space Invaders",
                args: {
                    core: "stella_libretro.dylib",
                    rom: "Atari 2600/Space Invaders.a26",
                },
            },
        ],
    },

    {
        handler: "SubMenuHandler",
        title: "Autres jeux",
        args: [
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
                title: "Gong (Pong)",
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
        ],
    },

    {
        handler: "SubMenuHandler",
        title: "Debug",
        args: [
            { handler: "ConsoleHandler", title: "Console" },
            { handler: "VolumeHandler", title: "Volume" },
        ],
    },
];

const retroarch = {
    coresPath: "$HOME/Library/Application Support/RetroArch/cores",
    romsPath: "/Volumes/J4",
};

module.exports = { options, retroarch };
