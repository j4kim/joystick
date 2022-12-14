# Joystick

## Interpréter les données du joytick, des boutons et du monnayeur

Lancer le script `joystick.js`:
```
node joystick.js
```

Il transforme les entrées du joystick en événements clavier: gauche, haut, droite, bas, A, B, tab, X, Y, enter, M.

## Mode log

Pour afficher les changements d'état du joystick.

```
node joystick.js log
```

## Application Automator

Le fichier `run dom at home.app` est une application construite avec Automator.

Elle est constituée de 3 étapes: 
1. Lancer joystick.js
2. Lancer dom at home sur un serveur local
3. Lancer Chrome en mode kiosk sur le serveur local

L'application est lancée à l'ouverture. Ceci est configuré depuis les préférences de l'utilisateur.

On peut terminer le process node qui écoute le joystick via le moniteur d'activité.