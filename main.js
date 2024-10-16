const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const Listener = require("./Listener");

SerialPort.list().then((ports) => {
    const arduino = ports.find((p) => p.manufacturer === "Arduino LLC");

    if (!arduino) {
        console.error("Arduino n'est pas connecté");
        process.exit(1);
    }

    const port = new SerialPort({ ...arduino, baudRate: 9600 });

    const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

    port.on("error", (err) => {
        console.error("Erreur sur le port série : ", err.message);
        process.exit(2);
    });

    const listener = new Listener();

    parser.on("data", (data) => listener.onData(data));
});
