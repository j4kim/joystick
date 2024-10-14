const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')

// npx @serialport/list pour lister les ports série 
const path = '/dev/tty.usbmodem11301';

// Configurer le port série avec le taux de transmission (baudRate) correct
const port = new SerialPort({ path, baudRate: 9600 });

// Utiliser un parser readline pour lire les données ligne par ligne
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))


// Ouverture du port
port.on('open', () => {
  console.log(`Port série ${path} ouvert avec succès`);
});

// Lecture des données du port série
parser.on('data', data => {
  console.log(`Données reçues : ${data}`);
});

// Gestion des erreurs
port.on('error', (err) => {
  console.error('Erreur sur le port série : ', err.message);
});
