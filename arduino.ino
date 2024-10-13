const int pinCLK = 21;
const int pinDT = 22;
const int pinSW = 23;
const int pinBtn = 2;

String state = "1111";

void setup() {
  pinMode(pinCLK, INPUT);
  pinMode(pinDT, INPUT);
  pinMode(pinSW, INPUT_PULLUP);
  pinMode(pinBtn, INPUT_PULLUP);

  Serial.begin(9600);
}

void loop() {
  String clk = String(digitalRead(pinCLK));
  String dt = String(digitalRead(pinDT));
  String sw = String(digitalRead(pinSW));
  String btn = String(digitalRead(pinBtn));

  String newState = clk + dt + sw + btn;
  if (newState != state) {
    state = newState;
    Serial.println(state);
  }

  delay(1);
}
