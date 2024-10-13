const int pinCLK = 21;
const int pinDT = 22;
const int pinSW = 23;
const int pinBtn = 2;

byte state = 0b1111;  // Valeur initiale, tout à HIGH

void setup() {
  pinMode(pinCLK, INPUT);
  pinMode(pinDT, INPUT);
  pinMode(pinSW, INPUT_PULLUP);
  pinMode(pinBtn, INPUT_PULLUP);

  Serial.begin(9600);
}

void loop() {
  // Lire les états actuels des broches et les combiner en un octet
  byte newState = (digitalRead(pinCLK) << 3) | (digitalRead(pinDT) << 2) | (digitalRead(pinSW) << 1) | digitalRead(pinBtn);

  // Si l'état a changé, afficher le nouvel état
  if (newState != state) {
    state = newState;  // Mettre à jour l'état précédent
    Serial.println(state);  // Afficher l'état en int
  }

  // Délai pour éviter des rafraîchissements trop rapides
  delay(1);
}
