const options = [
    { handler: "DomAtHomeHandler", title: "Dom At Home" },
    { handler: "VolumeHandler", title: "Volume" },
    { handler: "NumHandler", title: "Numbers" },
    { handler: "RetroArchHandler", title: "Rayman" },
];

const retroarch = {
    coresPath:
        "/Users/joaquimperez/Library/Application Support/RetroArch/cores",
    romsPath: "/Volumes/J4",
};

module.exports = { options, retroarch };
