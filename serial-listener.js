const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { increaseVolume, decreaseVolume } = require('./volume');

// npx @serialport/list pour lister les ports série 
const path = '/dev/tty.usbmodem11301';

// Configurer le port série avec le taux de transmission (baudRate) correct
const port = new SerialPort({ path, baudRate: 9600 });

// Utiliser un parser readline pour lire les données ligne par ligne
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))


// Ouverture du port
port.on('open', () => {
  console.log(`Port série ${path} ouvert avec succès`);
});

// Lecture des données du port série
parser.on('data', data => {
  console.log(`Données reçues : ${data}`);
  if (data === 'up') {
    increaseVolume();
  } else if (data === 'down') {
    decreaseVolume();
  }
});

// Gestion des erreurs
port.on('error', (err) => {
  console.error('Erreur sur le port série : ', err.message);
});
