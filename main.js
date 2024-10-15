const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const Listener = require('./Listener');

const path = '/dev/tty.usbmodem11301';

const port = new SerialPort({ path, baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

port.on('error', (err) => {
  console.error('Erreur sur le port série : ', err.message);
});

const listener = new Listener()

parser.on('data', data => listener.onData(data));
