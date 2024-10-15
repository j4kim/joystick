const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { increaseVolume, decreaseVolume } = require('./volume');

const path = '/dev/tty.usbmodem11301';

const port = new SerialPort({ path, baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

port.on('error', (err) => {
  console.error('Erreur sur le port série : ', err.message);
});

parser.on('data', data => {
  if (data === 'up') {
    increaseVolume();
  } else if (data === 'down') {
    decreaseVolume();
  }
});
