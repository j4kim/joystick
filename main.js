const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const Listener = require("./Listener");
const { arduino } = require("./config");

const port = new SerialPort(arduino);

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

port.on("error", (err) => {
    console.error("Erreur sur le port série : ", err.message);
});

const listener = new Listener();

parser.on("data", (data) => listener.onData(data));
