#include "Keyboard.h"

// Pins de l'encodeur
const int pinCLK = 21;
const int pinDT = 22;
const int pinSW = 23;

// Variables pour suivre l'état
int currentStateCLK;
int lastStateCLK;
int buttonState;

// Bouton keyboard
const int kbButtonPin = 2;
int kbPreviousState = HIGH; 

void setup() {
  // Configurer les pins comme entrées
  pinMode(pinCLK, INPUT);
  pinMode(pinDT, INPUT);
  pinMode(pinSW, INPUT_PULLUP);  // Le bouton a souvent une résistance pull-up interne

  // Initialiser la communication série
  Serial.begin(9600);

  // Lire l'état initial du CLK
  lastStateCLK = digitalRead(pinCLK);

  pinMode(kbButtonPin, INPUT_PULLUP);  
  Keyboard.begin();
}

void loop() {
  // Lire l'état actuel du CLK
  currentStateCLK = digitalRead(pinCLK);

  // Si le CLK a changé d'état
  if (currentStateCLK != lastStateCLK) {
    // Lire la valeur du DT
    int stateDT = digitalRead(pinDT);

    // Si DT est différent de CLK, l'encodeur tourne dans un sens
    if (stateDT != currentStateCLK) {
      Serial.println("Sens horaire");
    } else {
      Serial.println("Sens anti-horaire");
    }
  }

  // Mettre à jour l'état précédent du CLK
  lastStateCLK = currentStateCLK;

  // Lire l'état du bouton-poussoir
  buttonState = digitalRead(pinSW);

  // Si le bouton est pressé
  if (buttonState == LOW) {
    Serial.println("Bouton pressé");
    delay(50);  // Anti-rebond
  }

  // Keyboard
  int kbButtonState = digitalRead(kbButtonPin);
  if (kbButtonState != kbPreviousState) {
    if (kbButtonState == LOW) {
      Keyboard.press(97);
    } else {
      Keyboard.release(97);
    }
    delay(50);
    kbPreviousState = kbButtonState;
  }

  delay(1);  // Petit délai pour stabiliser la lecture
}
