# Arcade

## Architecture cible

Modes:
- `menu`: permet de choisir l'application à lancer parmi Dom At Home et les jeux RetroArch
- `retroarch`: lance un jeu sur RetroArch
- `domathome`: lance joystick.js pour émuler des entrées clavier pour Dom At Home, puis lance Dom At Home en mode Kiosk sur Chrome. Lorsqu'on quitte ce mode, il faut libérer le périphérique USB utilisé par joystick.js pour pouvoir l'utiliser sur RetroArch.

- Serial listener écoute les événements de l'encodeur rotatif connecté au Arduino:
    - `up`/`down` en mode menu: sélectionne le jeu à lancer
    - `up`/`down` en jeu: modifie le volume du Mac
    - `enter` en mode menu: lance le jeu sélectionné
    - `enter` en jeu: quitte le jeu et passe en mode menu

## Joystick

## Interpréter les données du joytick, des boutons et du monnayeur

Lancer le script `joystick.js`:
```
node joystick.js
```

Il transforme les entrées du joystick en événements clavier: gauche, haut, droite, bas, A, B, tab, X, Y, enter, M.

### Mode log

Pour afficher les changements d'état du joystick.

```
node joystick.js log
```