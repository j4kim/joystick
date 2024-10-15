const int pinCLK = 21;
const int pinDT = 22;
const int pinSW = 23;

// previous state
int _CLK = 1;
int _DT = 1;
int _SW = 1;

void setup() {
  pinMode(pinCLK, INPUT);
  pinMode(pinDT, INPUT);
  pinMode(pinSW, INPUT_PULLUP);

  Serial.begin(9600);
}

void loop() {
  int CLK = digitalRead(pinCLK);
  int DT = digitalRead(pinDT);
  int SW = digitalRead(pinSW);

  if (CLK != _CLK && CLK == LOW) {
    Serial.println(DT != CLK ? "up" : "down");
  }

  if (SW != _SW && SW == LOW) {
    Serial.println("switch");
  }

  _CLK = CLK;
  _DT = DT;
  _SW = SW;

  delay(1);
}
